import Image from "next/image"
import { Search, Phone, Mail, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#222222] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
                  <img src="logo.png"></img>
                </div>
              </div>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-white hover:text-red-600">
                  Home
                </a>
                <a href="#" className="text-white hover:text-red-600">
                  About
                </a>
                <a href="#" className="text-white hover:text-red-600">
                  Products
                </a>
                <a href="#" className="text-white hover:text-red-600">
                  Sourcing Guide
                </a>
                <a href="#" className="text-white hover:text-red-600">
                  Track & Pay
                </a>
                <a href="#" className="text-white hover:text-red-600">
                  Store Supplies
                </a>
                <a href="#" className="text-white hover:text-red-600">
                  Contact
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Input type="search" placeholder="Search products..." className="w-64 pr-10" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <Button className="bg-red-600 hover:bg-red-700">Request Quote</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <Image src="/background.png?height=400&width=1200" alt="Warehouse background" 
        fill className="object-cover" />
        <div className="relative text-center text-white z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Liquidate Smarter. Launch Faster.</h2>
          <p className="text-xl mb-6">Your trusted partner for analysis, closeouts, and market entry solutions.</p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Get Started
          </Button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/second_image.png?height=400&width=500"
                alt="Warehouse workers"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-red-100 text-red-600">Megashop</Badge>
              <h3 className="text-3xl font-bold mb-6">Who We Are</h3>
              <p className="text-gray-600 mb-6">
                Megashop Promotions is a trusted general merchandise distributor specializing in closeouts,
                liquidations, customer returns, and helping new retailers launch their business. We provide quality
                products at competitive prices to help you grow and effectively without compromising brand integrity.
              </p>
              <Button className="bg-red-600 hover:bg-red-700">Read More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">What We Do</h3>
            <p className="text-gray-300">
              Megashop Promotions is a trusted general merchandise distributor specializing in closeouts, liquidations,
              customer returns, and helping new retailers launch their business.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl">
              {[
                { title: "Consumer Electronics", image: "/brands1.png?height=200&width=200" },
                { title: "Small Appliances", image: "/brands2.png?height=200&width=200" },
                { title: "Home Goods & Accessories", image: "/brands3.png?height=200&width=200" },
                { title: "Personal Care Products", image: "/brands4.png?height=200&width=200" },
                { title: "Apparel & Footwear", image: "/brands5.png?height=200&width=200" },
              ].map((item, index) => (
                <Card key={index} className="bg-white text-black">
                  <CardContent className="p-4 text-center">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover rounded mb-4"
                    />
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="ghost" size="icon" className="text-white">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Megashop Promotions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-600">Why Work with</Badge>
              <h3 className="text-3xl font-bold mb-6">Megashop Promotions?</h3>
              <p className="text-gray-600 mb-4">
                <strong>Extensive Selection:</strong> Our curated inventory includes various items and categories,
                ensuring you find products that align with your business needs and customer preferences.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Flexible, Discount Solutions:</strong> Our inventory provides deals and regular discounts to
                help you maximize your profit margins.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Category Expansion:</strong> From groceries to home goods, we handle all your inventory needs,
                allowing you to focus on growing your business.
              </p>
              <Button className="bg-red-600 hover:bg-red-700">Read More</Button>
            </div>
            <div className="relative">
              <Image
                src="/Megashop Promotions.png?height=400&width=500"
                alt="Warehouse interior"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Right Place Section */}
     <section className="relative h-96 bg-gray-900 flex items-center justify-center"> 
      <div className="absolute inset-0 bg-black/50"></div>
        <Image src="/solution.png?height=400&width=1200" alt="Person in warehouse"  
        fill className="object-cover" />     
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative text-left text-white z-10">
              <h2 className="text-5xl font-bold mb-6">A right place for the right solution.</h2>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                pulvinar dapibus leo.
              </p>
              <Button className="bg-red-600 hover:bg-red-700">Contact Now</Button>
            </div>
            <div className="relative">
              {/*<Image src="/solution.png?height=400&width=500" alt="Person in warehouse" width={500} height={400} className="rounded-lg" />*/}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-4xl font-bold mb-2">
                Signup our newsletter to get update information, news, insight or promotions.
              </h4>
            </div>
            <div className="flex space-x-4">
              <Input type="email" placeholder="Enter your email" className="w-64 bg-white text-black" />
              <Button className="bg-red-600 hover:bg-red-700">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {icon: "📦",title: "Original Product", desc: "We provide original and branded products for the market",},
              { icon: "🛡️", title: "30 Days Warranty", desc: "Exchange your product within 30 days with no extra cost" },
              { icon: "🚚", title: "Global Shipping", desc: "Fast and secured worldwide shipping available" },
              { icon: "🔒", title: "100% Secure", desc: "We ensure your privacy and security through" },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h5 className="font-bold mb-2">{feature.title}</h5>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-600">TESTIMONIALS</Badge>
            <h3 className="text-3xl font-bold">What Our Customer Say</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Thomas Williams",
                role: "CEO",
                rating: 5,
                text: "Great work! All of their work was absolutely amazing! I would highly recommend Megashop Promotions to anyone looking for a reliable business partner.",
              },
              {
                name: "Thomas Williams",
                role: "CEO",
                rating: 5,
                text: "Great work! All of their work was absolutely amazing! I would highly recommend Megashop Promotions to anyone looking for a reliable business partner.",
              },
              {
                name: "Thomas Williams",
                role: "CEO",
                rating: 5,
                text: "Great work! All of their work was absolutely amazing! I would highly recommend Megashop Promotions to anyone looking for a reliable business partner.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white text-black">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h6 className="font-bold">{testimonial.name}</h6>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible. Whether you have
                questions about our products, need assistance with an order, or want to explore partnership
                opportunities, we're here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>(855) 956-1956</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span>info@megashoppromotions.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>1400 Mercantile Ln #104, Largo, FL 33771</span>
                </div>
              </div>
              <div className="mt-8">
                <Image
                  src="/Let’s Get in Touch.png?height=400&width=400"
                  alt="Team photo"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-6">Get A Quote Now! We Are Here to Help</h4>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                    </div>
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Phone" type="tel" />
                    <textarea
                      className="w-full p-3 border rounded-md resize-none h-32"
                      placeholder="Message"
                    ></textarea>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="captcha" />
                      <label htmlFor="captcha" className="text-sm">
                        I'm not a robot
                      </label>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Book Now</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
                  <img src="logo.png"></img>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Megashop Promotions is a trusted general merchandise distributor specializing in closeouts,
                liquidations, customer returns, and helping new retailers launch their business.
              </p>
            </div>
            <div>
              <h6 className="font-bold mb-4">DEPARTMENTS</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Appliances
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Home & Garden
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Personal Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Toys & Games
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-4">COMPANY INFO</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-4">YOUR ACCOUNT</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Your Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Order History
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Wish List
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Megashop Promotions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
