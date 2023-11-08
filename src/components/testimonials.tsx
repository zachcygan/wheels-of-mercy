import { Roboto } from 'next/font/google'
import { useEffect } from 'react'

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: '700'
})

const testimonials = [
  {
    body: 'This is such a blessing. Thank you, Thank you, Thank you!',
    author: {
      name: 'Maria Rodriguez',
      imageUrl:
        '/assets/images/testimonial1.jpg',
    },
  },
  {
    body: 'This is a miracle! God bless you!',
    author: {
      name: 'Avelino Rodriguez',
      imageUrl:
        '/assets/images/testimonial2.webp',
    },
  },
  {
    body: 'This is the best thing that’s ever happened to me!',
    author: {
      name: 'Victor Vanisacker',
      imageUrl:
        '/assets/images/carouselImage6.webp',
    },
  },
  {
    body: 'We are so grateful to Charles! Vernon loves his new Chair! Without Charles’ help Vernon would have never been approved for his new chair.',
    author: {
      name: 'Kaye Doan',
      imageUrl:
        '/assets/images/testimonial1.webp',
    },
  },
  {
    body: 'We are so grateful to Charles! Vernon loves his new Chair! Without Charles’ help Vernon would have never been approved for his new chair.',
    author: {
      name: 'PLACEHOLDER',
      imageUrl:
        '/assets/images/testimonial1.webp',
    },
  },
  // More testimonials...
]

export default function Testimonials() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    });
    const hiddenElements = document.querySelectorAll('.hiddenClass');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="py-4 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pb-10 text-center">
          {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2> */}
          <p className={`hiddenClass mt-2 text-4xl font-bold tracking-tight text-black dark:text-dark sm:text-6xl ${robotoFont.className}`}>
            We Have Helped Many Amazing People
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3 2xl:scale-125">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.name} className="hiddenClass test pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}