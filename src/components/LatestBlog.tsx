import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
// import { Link } from "react-router-dom"

const blogPosts = [
  {
    title: "Best Mobile Marketing Strategies for your Business",
    excerpt: "Explore the cutting-edge technologies and methodologies shaping the future of web development.",
    image: "/blog.jpg",
    date: "May 30, 2017",
    author: "Admin",
    slug: "future-of-web-development",
  },
  {
    title: "Creating an Effective Marketing Strategy",
    excerpt: "Learn how to leverage data analytics to optimize your digital marketing strategies and boost ROI.",
    image: "/blog_1.jpg",
    date: "22 June, 2017",
    author: "Admin",
    slug: "data-driven-digital-marketing",
  },
  {
    title: "Why Social Media is the next big thing!",
    excerpt: "Discover why user experience is crucial in today's digital landscape and how to improve it.",
    image: "/blog_2.jpg",
    date: "Aug 30, 2017",
    author: "Admin",
    slug: "importance-of-user-experience",
  },
]

export default function LatestBlog() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Latest from Our Blog
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and tips in the digital world
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="text-sm text-gray-500">
                    {post.date} | By {post.author}
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 bg-gray-800/30 border-t border-gray-700">
                  {/* <Link to="#home"> */}
                    <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  {/* </Link> */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          {/* <Link to="#home"> */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            >
              View All Posts
            </Button>
          {/* </Link> */}
        </motion.div>
      </div>
    </section>
  )
}