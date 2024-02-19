import logo from './assets/images/logo.png';
import name from './assets/images/name.png';
import arrow from './assets/icons/arrow-right-svgrepo-com.svg';
import './App.css';
import './styles/tailwind.css';

function Card({ title, description, imageUrl }) {
  return (
    <div className="relative flex  w-full xsm:w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" /> {/* Replace with image */}
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Read More
        </button>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, imageUrl }) {
  return (
    <section class="service-card">
      <div class="text-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div class="visual">
        <img src={imageUrl} className="w-full h-full object-cover" alt="" />
      </div>
    </section>
  );
}

function App() {
  const short_description = "Embark on a journey of discovery with Hayya Tours and Travels. From breathtaking landscapes to vibrant cultures, our expertly crafted tours promise unforgettable experiences. Let us guide you to your next adventure!";

  const cards = [
    {
      title: "Card 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://img.veenaworld.com/wp-content/uploads/2023/09/Famous-Places-in-the-World-Checking-off-the-Ultimate-Bucket-List.jpg" // Example image URL
    },
    {
      title: "Card 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://wallpapercave.com/wp/I2UB725.jpg" // Example image URL
    },
    {
      title: "Card 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://www.homeexchange.com/blog/content/images/2023/09/most-visited-tourist-attraction-world-unviersal-sydney-opera-house.png" // Example image URL
    },
    {
      title: "Card 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://w0.peakpx.com/wallpaper/180/998/HD-wallpaper-taj-maha-l-7-wonders-of-world-india-agra-tourism-landmark.jpg" // Example image URL
    },
    {
      title: "Card 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://via.placeholder.com/300" // Example image URL
    },
    {
      title: "Card 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://via.placeholder.com/300" // Example image URL
    }
  ];
  const service_cards = [
    {
      title: "Elevate Your Brand with Exceptional Design",
      description: "Your website is often the first point of contact for potential customers. We believe great design can help elevate your brand and make a lasting impression.",
      imageUrl: "https://assets-news.housing.com/news/wp-content/uploads/2022/06/28095201/15-worlds-best-places-to-visit-03.jpg" // Example image URL
    }, {
      title: "Elevate Your Brand with Exceptional Design",
      description: "Your website is often the first point of contact for potential customers. We believe great design can help elevate your brand and make a lasting impression.",
      imageUrl: "https://english.cdn.zeenews.com/sites/default/files/2023/05/17/1202207-touristplaces-feature.jpg" // Example image URL
    },
  ];
  return (
    <div className="w-full">
      <div className='w-full page-container top-bar'>
        <div className=' max-width'>
          hayya.com
        </div>
      </div>
      <header className='w-full page-container nav-header'>
        <div className=' max-width flex items-center justify-between gap-2'>
          <div className='flex gap-2 items-center'>
            <img className='logo' src={logo} alt="logo" />
            <img className='name' src={name} alt="name" />
          </div>
          <div className='flex gap-5'>
            <a className='nav-btn' href='#'>Home</a>
            <a className='nav-btn' href='#'>About</a>
            <a className='nav-btn' href='#'>Service</a>
            <a className='nav-btn' href='#'>Blog</a>
            <a className='nav-btn' href='#'>Contact</a>
          </div>
          <div class="card-media-mark">
            <a class="socialContainer containerOne" href="#">
              <svg viewBox="0 0 16 16" class="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
            </a>

            <a class="socialContainer containerThree" href="#">
              <svg viewBox="0 0 448 512" class="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
            </a>

            <a class="socialContainer containerFour" href="#">
              <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
            </a>
          </div>


        </div>
      </header>
      <div className='w-full banner'>
        <div className='w-full page-container banner-continer flex items-center justify-center'>
          <div className='max-width flex flex-col items-center justify-center'>
            <h1 className='font-lg'>Discover the World with Hayya</h1>
            <p className='shortDescription'>{short_description}</p>
            <button className='banner-btn flex gap-2 items-center'>Enquiry
              <img className='icon' src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className='w-full page-container'>
        <div className='max-width'>
          <h1 className='section-title' >Exclusive</h1>
          <div className='grid lg:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-5 mt-10'>
            {cards.map((card, index) => (
              <div key={index} className="m-4">
                <Card
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full page-container section-gray-bg'>
        <div className='max-width'>
          <h1 className='section-title' >Services</h1>
          <article className='mt-10'>
            {service_cards.map((card, index) => (
              <ServiceCard
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
          </article>
        </div>
      </div>

      <div className='w-full page-container'>
        <div className='max-width'>
          <h1 className='section-title' >Exclusive</h1>
        </div>
      </div>


      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              {/* <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a> */}
               <div className='flex gap-2 items-center'>
            <img className='logo' src={logo} alt="logo" />
            <img className='name' src={name} alt="name" />
          </div>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline">Hayya</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">Hayya</a>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
