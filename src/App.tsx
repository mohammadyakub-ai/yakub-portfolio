import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { StoryProjects, StoryResearch } from "./components/Story";
import { Experience } from "./components/Experience";
import { Writing } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PostView } from "./components/PostView";
import { posts } from "./data/posts";

function useRoute() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
}

function matchPost(hash: string) {
  const match = hash.match(/^#\/notes\/([a-z0-9-]+)$/);
  if (!match) return null;
  return posts.find((p) => p.slug === match[1]) ?? null;
}

export default function App() {
  const hash = useRoute();
  const post = matchPost(hash);

  useEffect(() => {
    if (post) window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [post]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-cream">
        <Nav />
        <main>
          {post ? (
            <PostView post={post} />
          ) : (
            <>
              <Hero />
              <StoryProjects />
              <Experience />
              <StoryResearch />
              <Writing />
              <Contact />
            </>
          )}
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}