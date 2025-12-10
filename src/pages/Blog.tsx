import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogs";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Blog & Insights" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog" }
          ]} 
        />

        {/* Blog Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Blog</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Industry News & Insights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Stay updated with the latest trends, insights, and developments in the sodium silicate industry. Our team shares valuable knowledge and expertise through regular articles.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                  <div className="aspect-video bg-primary/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-display font-bold text-primary/20">
                        {post.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <Link to={`/blog/${post.id}`} className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Get the latest industry insights, product updates, and company news delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground/50"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
