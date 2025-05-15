<template>
  <div>

    <NavBar />
    <img
        class="-z-5 m-[0px] fixed w-[100%] h-[100%]"
        src="https://cdbaby.com/wp-content/uploads/2022/07/LeadCapture_BG_yellow.jpg"
        alt=""
      />
    
    <!-- Main Content -->
    <main class="min-h-[calc(100vh-160px)]">
    <div>

  <video autoplay muted loop controls class="object-cover absolute m-[0px] ml-[0px] mr-[0px] mb-[-40px] w-[100%] h-[100%] -z-2" src="https://cdbaby.com/wp-content/uploads/2023/02/CDB_Homepage_0223_HeroBackgroundVideo_03.mp4">
  </video>
      <div
        class="text-left rgba(255, 255, 255, 0.6) -z-1 max-w-3xl mx-auto px-4 py-20 text-center"
      >
     
        <h1
          class=" leading-none font-bold text-left text-[] text-[82.75px] m-[1px 5px 4px] text-[#F2B538]"
        >Your music<br />deserves to be heard.
        </h1>

        <div class="text-[#EBEBEB] text-[3rem] text-[white p-6">
  <p class="font-serif text-lg">
    Release a single or album for only $9.99.
  </p>
  <p class="font-serif italic text-base">
    No subscription fees.
  </p>
</div>
        <!-- <div class=" text-[2rem] space-y-6 mb-12">
          <p class="letter-spacing-[-0.03em] font-[italic] mb-0 leading-none text-[#EBEBEB] text-[white]">
            Release a single or album for only $9.99. <br>No subscription fees.
          </p>
        
        </div> -->

        <button
          class="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
        >
          GET STARTED
        </button>
      </div>
      </div>
    </main>
  </div>
    <div class="min-h-screen bg-yellow">
      <!-- Hero Section -->

      <section
        class="pt-24 pb-12 bg-white"
      >
        <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center text-black">
            <h1 class="text-5xl md:text-6xl font-bold p-[15px]">
              Music distribution: be everywhere you
            <br />need to be — worldwide. </h1>

            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Make your music available on 150+ streaming and download services
              around the world, including Spotify, Apple Music, TikTok, Amazon,
              Pandora, YouTube, and Deezer, all for a one-time setup fee.
              Wherever your fans prefer to listen to music, they’ll find you!
            </p>

            <div class="grid grid-cols-4 gap-2 grid-rows-2 w-[800px] mx-auto">
              <img
                v-for="image in images"
                class="mb-[20px] max-w-[170px] max-h-[50px] object-fit"
                :src="image"
                alt=""
              />
            </div>
            <button
              class="font-[italic] bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Distribute music
            </button>
            <br />
            <a class=" font-[italic] text-lg" href="#">View our complete list of digital partners</a>
          </div>
        </div>
      </section>  


      <section
        class="rgba(255, 255, 255, 0.6) max-h-[700px] -z-1 pt-24 pb-12 bg-gradient-to-br from-white-600 to-blue-450"
      >
        <div class="max-w-7xl max-h-17xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center text-white">
            <h1 class="text-3xl md:text-5xl font-bold mb-6">
              Subscribe to receive DIY Musician tips,special offers, and more.
            </h1>
            <div class="flex items-center justify-center ">
  <div class="flex gap-[85px] rounded-md overflow-hidden">
    <input 
      type="email" 
      placeholder="Enter your email" 
      class="px-4 bg-[white] py-2 w-79 text-gray-700 placeholder-white-600 focus"
    />
    <button 
      class="bg-cyan-500 text-white font-bold px-6 py-4 hover:bg-red-500 transition-colors"
    >
      SUBMIT
    </button>
  </div>
</div>

          </div>
        </div>
      </section>


      <section class="pt-2 pb-1 bg-[#0B0C3C]">
        <div class="flex justify-center items-center">
  <img src="https://cdbaby.com/wp-content/themes/cdbaby_theme/images/svgs/graphic-why-cbd.svg" alt="Your Image" class=" w-64 h-auto" />
</div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 text-white text-center">
  
  <!-- Block 1 -->
  <div class="flex flex-col items-center">
    <img src="https://cdbaby.com/wp-content/uploads/2024/10/icon-money.svg" alt="dollar icon" class="w-24 h-24 mb-4">
    <h3 class="text-xl font-bold text-yellow-400 mb-2">
      One-time payment<br>per release
    </h3>
    <p class="max-w-[260px] text-lg text-white">
      Just $9.99 per release with no annual fees – so your music stays on major platforms year after year.
    </p>
  </div>

  <!-- Block 2 -->
  <div class="flex flex-col items-center">
    <img src="https://cdbaby.com/wp-content/uploads/2024/10/icon-graph.svg" alt="graph icon" class="w-24 h-24 mb-4">
    <h3 class=" text-xl font-bold text-yellow-400 mb-2">
      Invested in<br>your success
    </h3>
    <p class="max-w-[260px] text-lg text-white">
      After your music release, we only make money when you make money. And when you do, you keep over 90%.
    </p>
  </div>

  <!-- Block 3 -->
  <div class="flex flex-col items-center">
    <img src="https://cdbaby.com/wp-content/uploads/2024/10/icon-music.svg" alt="music icon" class="w-24 h-24 mb-4">
    <h3 class="text-xl font-bold text-yellow-400 mb-2">
      Built by musicians,<br>for musicians
    </h3>
    <p class="max-w-[260px] text-lg text-white">
      Since 1998, CD Baby has paid over $1 billion to independent artists.
    </p>
  </div>
</div>
<button class="font-[italic] bg-[#F2B533] text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-500 transition-colors"
> <a href="https://members.cdbaby.com/sign-up">Get Started </a></button>
  </section>

<section>
  <div class="bg-[#F2B538] py-16 px-4">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-semibold text-center mb-12">
      What artists are saying about <span class="whitespace-nowrap">CD Baby</span>
    </h2>

    <div class="grid gap-15 md:grid-cols-2 lg:grid-cols-2">
      
      <!-- Testimonial 1 -->
      <div class="bg-#F2B538 p-6 rounded-lg shadow">
        <div class="flex justify-center mb-4">
          <img src="https://cdbaby.com/wp-content/uploads/2022/06/testimonial_AloeBlacc-1-300x300.png" alt="Aloe Blacc testimonial photo" 
          class="rounded-full smush-placeholder w-[300px] h-[300px] object-cover">
        </div>
        <blockquote class="text-[1.2em] text-gray-700 text-[Robert-bold] text-base italic mb-4">
          “CD Baby makes it super easy to drop a worldwide release on your own schedule. The user interface is simple and the terms are great. The best part is when you see an email with the sales statement. Then you know the music is making an impact on people.”
        </blockquote>
        <p class="font-semibold text-center">Aloe Blacc</p>
        <p class="text-sm text-center text-black-500 text-[Robert-bold] ">Singer/songwriter, record producer</p>
      </div>

      <!-- Testimonial 2 -->
      <div class="bg-#F2B538  p-6 rounded-lg shadow">
        <div class="flex justify-center mb-4">
          <img src="https://cdbaby.com/wp-content/uploads/2024/04/Testimonials_SHEARS-300x300.png" alt="Shears testimonial photo" class="rounded-full smush-placeholder w-[300px] h-[300px] object-cover">
      </div>
        <blockquote class="text-[1.2em] text-gray-700 text-[Robert-bold] text-base italic mb-4">
          “I recommend CD Baby to everyone. They are incredibly helpful and know what matters to artists. The platform is super easy to use, and the team is really responsive. Being an independent artist is tough, but <span class="whitespace-nowrap">CD Baby</span> makes it easier. They’ve provided the best experience I’ve had with a distributor.”
        </blockquote>
        <p class="font-semibold text-center">SHEARS</p>
        <p class="text-sm text-center text-black-500">Artist, producer, and mixer</p>
      </div>

      <!-- Testimonial 3 -->
      <div class="bg-#F2B538  p-6 rounded-lg shadow">
        <div class="flex justify-center mb-4">
          <img src="https://cdbaby.com/wp-content/uploads/2024/04/Testimonials_TwoWaysHome-300x300.png" alt="Two Ways Home testimonial photo" class="rounded-full smush-placeholder w-[300px] h-[300px] object-cover">
        </div>
        <blockquote class="text-[1.2em] text-gray-700 text-base italic mb-4">
          “Working with CD Baby has been a game changer for us. Their hands-on support and quick responses are a breath of fresh air, and they nail it every time. Everyone we have worked with at CD Baby has genuinely been interested in our music and helping us further our career. We love being part of their community and working with people we can trust.”
        </blockquote>
        <p class="font-semibold text-center">Two Ways Home</p>
        <p class="text-sm text-center text-black-500">Americana songwriting duo</p>
      </div>

      <!-- Testimonial 4 -->
      <div class="bg-#F2B538 p-6 rounded-lg shadow">
        <div class="flex justify-center mb-4">
          <img src="https://cdbaby.com/wp-content/uploads/2024/04/Testimonials_LAMIC-300x300.png" alt="LAMIC testimonial photo" class="rounded-full smush-placeholder w-[300px] h-[300px] object-cover">
        </div>
        <blockquote class="text-[1.2em] text-gray-700 text-base italic mb-4">
          “It’s been over a year since I started working with CD Baby, and I couldn’t be more satisfied! From the first contact to the release itself, their team was amazing. They not only helped me at every step, but they made me feel like part of the family from the beginning. This partnership has completely changed the game for me.”
        </blockquote>
        <p class="font-semibold text-center">LAMIC</p>
        <p class="text-sm text-center text-black-500">Producer, DJ, and composer</p>
      </div>

    </div>
  </div>
</div>

</section>

<section id="footer-social-wrapper" class="w-full bg-[#40BCD0] py-6">
  <div class="flex justify-center gap-4">
    
    <!-- Instagram -->
    <a href="https://www.instagram.com/cdbaby" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <button class="border-[2.5px] border-black hover:bg-black rounded-full p-5 transition">
        <object type="image/svg+xml" width="25" data="https://cdbaby.com/wp-content/uploads/2023/02/footer_ig.svg"></object>
      </button>
    </a>

    <!-- YouTube -->
    <a href="https://www.youtube.com/cdbaby" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <button class=" border-[2.5px] border-blackbg-[#F1G233] hover:bg-black rounded-full p-5 transition">
        <object type="image/svg+xml" width="25" data="https://cdbaby.com/wp-content/uploads/2023/12/social-icon-youtube.svg"></object>
      </button>
    </a>

    <!-- Threads -->
    <a href="https://www.threads.net/@cdbaby" target="_blank" rel="noopener noreferrer" aria-label="Threads">
      <button class=" border-[2.5px] border-black bg-[#F1G233] hover:bg-black rounded-full p-5 transition">
        <object type="image/svg+xml" width="25" data="https://cdbaby.com/wp-content/uploads/2023/12/social-icon-threads.svg"></object>
      </button>
    </a>

    <!-- TikTok -->
    <a href="https://www.tiktok.com/@cdbaby" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
      <button class=" border-[2.5px] border-black bg-[#F1G233] hover:bg-black rounded-full p-5 transition">
        <object type="image/svg+xml" width="25" data="https://cdbaby.com/wp-content/uploads/2023/01/footer_tiktok.svg"></object>
      </button>
    </a>

    <!-- Facebook -->
    <a href="https://www.facebook.com/cdbaby" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <button class=" border-[2.5px] border-black bg-[#F1G233] hover:bg-black rounded-full p-5 transition">
        <object type="image/svg+xml" width="25" data="https://cdbaby.com/wp-content/uploads/2023/02/footer_fb.svg"></object>
      </button>
    </a>

  </div>
</section>

    <!-- Footer -->
    <footer id="footer" class="bg-gray-900 text-white px-6 py-12">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <div class="flex justify-center items-center">
      <a href="https://cdbaby.com/" aria-label="home link logo icon" class="block">
<img src="" alt="">
      </a>
    </div>

    <!-- Company  Informasiya -->
    <nav>
      <h4 class="text-lg font-semibold mb-4">Company Info</h4>
      <ul class=" text-[#F2B538] space-y-2">
        <li><a href="https://members.cdbaby.com/login" class="hover:underline hover:text-[#739FC1]">Login</a></li>
        <li><a href="https://support.cdbaby.com/hc/en-us" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-[#739FC1]">Support</a></li>
        <li><a href="https://cdbaby.com/cd-baby-cost/" class="hover:underline hover:text-[#739FC1]">Pricing</a></li>
        <li><a href="https://cdbaby.com/reviews/" class="hover:underline hover:text-[#739FC1]">Testimonials</a></li>
        <li><a href="https://cdbaby.com/careers/" class="hover:underline hover:text-[#739FC1]">Careers</a></li>
        <li><a href="https://cdbaby.com/branding/" class="hover:underline hover:text-[#739FC1]">Brand Guidelines</a></li>
        <li><a href="https://cdbaby.com/sitemap/" class="hover:underline hover:text-[#739FC1]">Sitemap</a></li>
        <li><a href="https://cdbaby.com/downtown/" class="hover:underline hover:text-[#739FC1]">Downtown Music</a></li>
      </ul>
    </nav>

    <!-- CD Baby Brands -->
    <nav>
      <h4 class="text-lg font-semibold mb-4">CD Baby Brands</h4>
      <ul class="text-[#F2B538] space-y-2">
        <li><a href="https://www.show.co/" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-[#739FC1]">Show.co</a></li>
        <li><a href="https://hearnow.com/" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-[#739FC1]">HearNow</a></li>
        <li><a href="https://duplication.cdbaby.com/" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-[#739FC1]">CD Baby Disc Manufacturing</a></li>
        <li><a href="https://downloads.cdbaby.com/" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-[#739FC1]">CD Baby Download Portal</a></li>
      </ul>
    </nav>

    <!-- Promotion Resources -->
    <nav>
      <h4 class="text-lg font-semibold mb-4">Promotion Resources</h4>
      <ul class="text-[#F2B538] space-y-2">
        <li><a href="https://cdbaby.com" class="hover:underline">Visit CD Baby</a></li>
        <!-- Add more promotion resource links here as needed -->
      </ul>
    </nav>
  </div>
</footer>

<div class="fixed bottom-10 left-10 z-50" data-cky-tag="revisit-consent" data-tooltip="Cookie Settings">
  <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600" aria-label="Cookie Settings">
    <img src="https://cdn-cookieyes.com/assets/images/revisit.svg" alt="Revisit consent button" class="h-6 w-6">
  </button>
</div>

  </div>
</template>

<script setup>
import { isOpen, changeIsOpenValue } from "../compasable/isOpen.js";
import NavBar from "../components/NavBar.vue";
const images = [
  "https://cdbaby.com/wp-content/uploads/2021/09/apple-music-2020.svg",
  "https://cdbaby.com/wp-content/uploads/2024/07/Spotify_Full_Logo_RGB_Green-800px-768x210.png",
  "https://cdbaby.com/wp-content/uploads/2021/09/pandora.svg",
  "https://cdbaby.com/wp-content/uploads/2021/09/youtube.svg",
  "https://cdbaby.com/wp-content/uploads/2021/09/logo-shazam.png",
  "https://cdbaby.com/wp-content/uploads/2021/12/instagram.svg",
  "https://cdbaby.com/wp-content/uploads/2021/09/tiktok.svg",
  "https://cdbaby.com/wp-content/uploads/2021/09/amazon_music.svg",
];

console.log(images[2]);
</script>
