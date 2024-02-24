import arrow from '../../assets/icons/arrow-right-svgrepo-com.svg';
import '../../App';
import '../../styles/tailwind.css';

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

function IconCard({ title, description, imageUrl, index }) {
  return (
    <div
      class="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]"
    >
      <svg
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        stroke="#000000"
        fill="none"
        viewBox="0 0 24 24"
        class=" h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
        <line y2="21" x2="16" y1="21" x1="8"></line>
        <line y2="21" x2="12" y1="17" x1="12"></line>
      </svg>

      <p class="font-bold text-2xl group-hover:text-white text-black/80">
        {title}
      </p>
      <p class="text-gray-400 text-sm">
        {description}
      </p>
      <p
        class="icon-card-no font-bold self-end"
      >
        0{index + 1}
      </p>
    </div>

  )
}

function ServiceCard({ title, description, imageUrl }) {
  return (
    <div className='flex 2xs:flex-row flex-col service-card'>
      <img src={imageUrl} alt={title} className="service-card-img h-full object-cover" />
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>
    </div>
  );
}

const Landing = () => {
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
    }, {
      title: "Card 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://wallpapercave.com/wp/I2UB725.jpg" // Example image URL
    },
    {
      title: "Card 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://www.homeexchange.com/blog/content/images/2023/09/most-visited-tourist-attraction-world-unviersal-sydney-opera-house.png" // Example image URL
    },
  ];
  const tool_cards = [
    {
      title: "Card 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://wallpapercave.com/wp/I2UB725.jpg" // Example image URL
    },
    {
      title: "Card 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://www.homeexchange.com/blog/content/images/2023/09/most-visited-tourist-attraction-world-unviersal-sydney-opera-house.png" // Example image URL
    }, {
      title: "Card 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://wallpapercave.com/wp/I2UB725.jpg" // Example image URL
    },
    {
      title: "Card 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://www.homeexchange.com/blog/content/images/2023/09/most-visited-tourist-attraction-world-unviersal-sydney-opera-house.png" // Example image URL
    }, {
      title: "Card 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://wallpapercave.com/wp/I2UB725.jpg" // Example image URL
    },
    {
      title: "Card 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://www.homeexchange.com/blog/content/images/2023/09/most-visited-tourist-attraction-world-unviersal-sydney-opera-house.png" // Example image URL
    }, {
      title: "Card 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://wallpapercave.com/wp/I2UB725.jpg" // Example image URL
    },
    {
      title: "Card 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      imageUrl: "https://www.homeexchange.com/blog/content/images/2023/09/most-visited-tourist-attraction-world-unviersal-sydney-opera-house.png" // Example image URL
    },
  ];
  return (
    <div className="w-full">
      <div className='w-full banner'>
        <div className='w-full page-container banner-continer flex items-center justify-center'>
          <div className='max-width flex flex-col items-center justify-center'>
            <h1 className='font-lg'>Discover the World with Hayya Tours and Travels</h1>
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
          <div className='w-full flex justify-center'>
            <div className='grid lg:grid-cols-4 xsm:grid-cols-2 grid-cols-1 gap-10 mt-10'>
              {tool_cards.map((card, index) => (
                <div key={index}>
                  <IconCard
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full page-container section-gray-bg'>
        <div className='max-width'>
          <h1 className='section-title' >Services</h1>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-5 mt-10'>
            {service_cards.map((card, index) => (
              <ServiceCard
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
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

    </div>
  );
}

export default Landing