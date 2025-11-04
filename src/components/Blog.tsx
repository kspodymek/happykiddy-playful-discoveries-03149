import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image_url: string | null;
  slug: string;
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, excerpt, category, image_url, slug")
        .order("published_at", { ascending: false })
        .limit(3);

      if (!error && data) {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Porady i pomysły dla rodziców
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Inspiracje na kreatywne zajęcia z dziećmi i przydatne wskazówki wychowawcze
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {post.image_url && (
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="w-full"
                >
                  Czytaj więcej
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-muted-foreground">
            Wkrótce dodamy pierwsze artykuły!
          </p>
        )}
      </div>
    </section>
  );
}
