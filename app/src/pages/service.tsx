import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";

// type ServiceProps = {};

const Service: FunctionComponent = ({ services }) => {
  return (
    <div className="container">
      <ul>
        {services.map((service: { id: number; title: string; url: string }) => (
          <li key={service.id}>
            <a href={service.url} target="_blank">
              {service.url}
            </a>
            <p>{service.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// This function gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://dragmove.github.io/dragmove.com/data/services.json"
  );
  const services: object[] = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { services },
  };
};

/*
// TODO: Refer - https://nextjs.org/docs/basic-features/pages and https://nextjs.org/docs/basic-features/data-fetching
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    "https://dragmove.github.io/dragmove.com/data/services.json"
  );
  const services: object[] = await res.json();

  // Pass data to the page via props
  return {
    props: { services },
  };
}
*/

export default Service;
