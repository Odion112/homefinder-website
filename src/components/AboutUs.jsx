import PropertyImage from "../assets/images/property1.svg";
import SmallPropertyImage from "../assets/images/property2.svg";
import users from "../assets/images/users-group.svg";

function AboutUs() {
  return (
    <section className="bg-transparent text-[#0E0D0C] font-neue px-[60px] py-[90px] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-[5px] items-start">

          {/* LEFT */}
          <div className="w-115">

            <img
              src={PropertyImage}
              alt="Main House"
              className="w-full h-[390px] object-cover rounded-sm"
            />

            {/* STATS */}
            <div className="mt-10 flex justify-between w-full">

              <div>
                <h2 className="text-[32px] font-medium">
                  200+
                </h2>

                <p className="text-[#696262] text-[16px] mt-1">
                  Verified Listings
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-medium">
                  50+
                </h2>

                <p className="text-[#696262] text-[16px] mt-1">
                  Property Owners
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-medium">
                  60+
                </h2>

                <p className="text-[#696262] text-[16px] mt-1">
                  Locations
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">

            <h2 className="text-[30px] leading-[42px] max-w-[620px]">
              We are a property rental marketplace committed to making house
              hunting easier and more straightforward.
            </h2>

            {/* USERS */}
            <div className="flex items-center gap-4 mt-10">

              <img
                src={users}
                alt="Users"
                className="w-[170px]"
              />

              <p className="text-[#A5A1A1] text-[14px]">
                <span className="text-[#696262] font-medium text-[16px]">
                  2000+ renters
                </span>

                <br />

                found their home on Homefinder
              </p>

            </div>

            {/* DESCRIPTION + FLOATING IMAGE */}
            <div className="mt-[85px] flex items-end justify-between gap-8 ">

              <p className="text-[#696262] text-[15px] w-[420px] leading-[24px]">
                Our goal is to connect property seekers with property owners
                through a simpler and more transparent rental experience,
                helping users discover available listings and find a place
                they can call home.
              </p>

              <img
                src={SmallPropertyImage}
                alt="Small House"
                className="
                  hidden
                  lg:block
                  w-[190px]
                  h-[200px]
                  object-cover
                  rounded-sm
                  shrink-0
                "
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;