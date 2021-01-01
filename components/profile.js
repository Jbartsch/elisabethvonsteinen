import Image from "next/image";
export default function Profile() {
  return (
    <div className="my-8 space-y-12 lg:grid lg:grid-cols-1 lg:gap-8 lg:space-y-0">
      <div className="lg:col-span-2">
        <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
          <li className="sm:py-8">
            <div className="space-y-4 sm:grid sm:grid-cols-2 sm:items-start sm:gap-6 sm:space-y-0">
              {/* Image */}
              <div className="aspect-w-1 aspect-h-1 sm:aspect-w-1 sm:aspect-h-1">
                <Image
                  className="object-cover rounded-full"
                  src="/profil.jpeg"
                  width="100"
                  height="100"
                  alt="profilbild"
                />
              </div>
              <div className="sm:col-span-2">
                <div className="space-y-4">
                  <div className="mt-0 prose prose-indigo text-gray-700 dark:text-white mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                    <p>
                      Elisabeth von Steinen lebt in der Nähe von Zürich und in
                      La Chaux-de-Fonds. Lange Jahre verbrachte sie in den
                      Niederlanden, wo sie die flämische und niederländische
                      Literatur zum Schreiben eigener Texte inspirierte.
                      Elisabeth von Steinen begann, sich auf ihre Wurzeln zu
                      besinnen. Zunächst erforschte sie die Sagen aus ihrer
                      ersten Heimat. Daraus entspann sich ein dichter, fiktiver
                      Text. Der Roman Zerrissene Zeit ist die erste
                      Veröffentlichung von Elisabeth von Steinen.
                    </p>
                  </div>
                  <ul className="flex space-x-5">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/lisa-b%C3%A4rtsch-joosten-a13a53116/"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span>LinkedIn</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* More people...*/}
        </ul>
      </div>
    </div>
  );
}
