import * as React from "react";
import Cta from './cta';

const OfferedServices = (props: any) => {
    const { services, color } = props;
    services.sort();
    const serviceDivs = (services:any) => {
        return (
          <ul className="grid gap-y-7 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service:any) => (
              <li className="">
                <a className="font-semibold text-xl text-black no-underline hover:underline" href={service.slug}>{service.name}</a>
                <ul>
                  {service.c_subTopics && service.c_subTopics.length
                    ? service.c_subTopics.map((topic:any) => (
                        <li className="">
                          <a
                            href={topic.slug}
                            className="hover:underline"
                            style={{ color: color }}>{topic.name}</a>
                        </li>
                      ))
                    : null}
                </ul>
              </li>
            ))}
          </ul>
        );
      };


      return (
          <>
            <div className="section flex flex-col space-y-10">
                <h2 className="">Dental Services Offered</h2>
                <div className="">
                    {serviceDivs(services)}
                </div>
            </div>
          </>
        );
      };
  
  export default OfferedServices;