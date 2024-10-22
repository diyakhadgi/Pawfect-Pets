import React from 'react'
import Navbar from '../components/Navbar'
import us from '../assets/parent.jpg';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white border-gray-200 dark:bg-gray-500 dark:border-gray-700 w-full h-96 relative flex items-center justify-center">
        <h1 className="text-4xl font-bold text-black absolute top-1/2 transform -translate-y-1/2 text-center z-20">
          ABOUT US
        </h1>
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <img src={us} alt="About Us" className="w-48 h-48 object-cover rounded-full border-4 border-white" />
        </div>
      </div>
      <div className="bg-sky-50 mt-10 mx-20 rounded-lg">
        <div className="p-5 leading-9">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Our Dog Lovers' Hub</h2>
          <p>
            Welcome to our dedicated hub for dog lovers—a unique platform that combines premium dog accessories with a heartfelt commitment to dog adoption. Here, we celebrate the unwavering bond between humans and their furry companions, understanding that dogs are not just pets; they are cherished family members. Our mission is to enhance the lives of both dogs and their owners by providing top-notch products that ensure comfort, style, and safety for every pup.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Our Passion for Quality Accessories</h2>
          <p>
            We believe that every dog deserves the best, which is why we carefully curate a diverse selection of high-quality accessories. From stylish collars and durable leashes to cozy beds and interactive toys, our products are designed with your dog's needs in mind. Each item is crafted from safe, durable materials that stand up to the wear and tear of everyday adventures. We prioritize both functionality and aesthetics, ensuring that your dog can look great while feeling comfortable.
          </p>
          <p>
            Our commitment to quality extends beyond our products. We pride ourselves on exceptional customer service, always ready to help you find the perfect accessory for your furry friend. Our knowledgeable team is passionate about pets and is here to provide expert advice, share tips on dog care, and answer any questions you may have.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">A Heartfelt Commitment to Dog Adoption</h2>
          <p>
            At the core of our mission lies a profound commitment to dog adoption. We understand that countless dogs are in need of loving homes, and we are dedicated to making a difference. Our website is not just a marketplace; it’s a platform for change. We partner with local shelters and rescue organizations to bring you adoptable dogs looking for their forever homes.
          </p>
          <p>
            Every dog deserves a second chance, and we aim to facilitate that journey. Through our adoption program, we provide detailed profiles of dogs in need, showcasing their unique personalities and stories. We believe in transparency and strive to equip potential adopters with the information they need to make informed decisions. Whether you’re considering adopting a playful puppy or a wise senior dog, we’re here to guide you through the process, ensuring a match that suits your lifestyle and preferences.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Building a Community of Dog Lovers</h2>
          <p>
            Our vision extends beyond simply selling products and facilitating adoptions. We aim to foster a community of responsible pet owners who share our passion for dogs. Through our blog and social media channels, we provide valuable resources, including training tips, health advice, and heartwarming success stories of adopted dogs. We believe that education is key to responsible pet ownership, and we’re committed to empowering dog owners with the knowledge they need to provide the best care possible.
          </p>
          <p>
            We love to hear from our customers! Your stories and experiences inspire us and help us grow as a community. Whether you’ve adopted a dog through our platform or purchased a product for your beloved companion, we want to celebrate your journey together.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Join Us on This Journey</h2>
          <p>
            Thank you for visiting our website and for being a part of our mission to improve the lives of dogs and the people who love them. Together, we can make a difference, one dog at a time. By choosing to shop with us, you’re not just purchasing accessories; you’re supporting a cause that resonates deeply with us all. Every purchase helps fund our dog adoption efforts and supports local shelters, allowing us to save more lives.
          </p>
          <p>
            We invite you to explore our collection of quality dog accessories and consider adopting a dog in need. Join us in celebrating the joy that dogs bring into our lives and help us create a world where every dog has a loving home. Together, let’s embark on this journey to make a lasting impact on the lives of our furry friends and their future families.
          </p>
        </div>
      </div>

      {/* footer section  */}
      <Footer/>
    </>
  )
}

export default AboutUs
