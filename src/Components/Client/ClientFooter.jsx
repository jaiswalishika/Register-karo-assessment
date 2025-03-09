import React from "react";

const ClientFooter = () => {
  return (
    <section className="w-full h-auto py-6 bg-[#FFA229] flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-[1200px]">
        {/* Step 1 */}
        <div className="flex items-center gap-4 w-full sm:w-auto px-4">
          <div className="w-[52px] h-[52px] bg-[#EB5757] rounded-full flex items-center justify-center">
            <img
              src="./images/group.png"
              alt="Logo"
              className="h-[24px] w-auto object-contain"
            />
          </div>
          <p className="font-bold text-sm text-center sm:text-left">
            Fill up Application Form
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex items-center gap-4 w-full sm:w-auto px-4">
          <div className="w-[52px] h-[52px] bg-[#27AE60] rounded-full flex items-center justify-center">
            <img
              src="./images/em.png"
              alt="Logo"
              className="h-[24px] w-auto object-contain"
            />
          </div>
          <p className="font-bold text-sm text-center sm:text-left">
            Make Online Payment
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex items-center gap-4 w-full sm:w-auto px-4">
          <div>
            <img
              src="./images/av.png"
              alt="Logo"
              className="h-[24px] w-auto object-contain"
            />
          </div>
          <p className="font-bold text-sm text-center sm:text-left">
            Executive will Process Application
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex items-center gap-4 w-full sm:w-auto px-4">
          <div className="w-[52px] h-[52px] bg-[#F2994A] rounded-full flex items-center justify-center">
            <div className="w-[52px] h-[52px] bg-[#828282] rounded-full flex items-center justify-center">
              <img
                src="./images/Vector.png"
                alt="Logo"
                className="h-[24px] w-auto object-contain"
              />
            </div>
          </div>
          <p className="font-bold text-sm text-center sm:text-left">
            Get Confirm Mail
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientFooter;
