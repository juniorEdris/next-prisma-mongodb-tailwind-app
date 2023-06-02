"use client";

const Container = ({ children }) => {
  return (
    <section
      className="
          max-w-[2520px]
          mx-auto
          xl:px-20 
          md:px-10
          sm:px-2
          px-4
        "
    >
      {children}
    </section>
  );
};

export default Container;
