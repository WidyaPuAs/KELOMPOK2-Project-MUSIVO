import React from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import { dataArtist } from "../data/artist-all";

const Artist = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Sidebar />
      <div className="justify-center text-center my-[6rem]">
        <h1 className="text-4xl font-bold text-center">Popular Artist</h1>
        <p className="text-xs text-center">Lorem ipsum dolor sit amet.</p>
        <div className="ml-28  w-[73rem] justify-center h-full text-center mt-5">
          {dataArtist.map((artist, index) => {
            return (
              <div className="flex justify-evenly my-11">
                <div className="text-center items-center" key={index.id}>
                  <img  
                    src={artist.image}
                    alt="img1"
                    className="text-center mx-auto w-44"
                  />
                  <h3 className="text-center">{artist.artis}</h3>
                </div>
                <div className="text-center items-center" key={index.id}>
                  <img  
                    src={artist.image}
                    alt="img1"
                    className="text-center mx-auto w-44"
                  />
                  <h3 className="text-center">{artist.artis}</h3>
                </div>
                <div className="text-center items-center" key={index.id}>
                  <img  
                    src={artist.image}
                    alt="img1"
                    className="text-center mx-auto w-44"
                  />
                  <h3 className="text-center">{artist.artis}</h3>
                </div>
                <div className="text-center items-center" key={index.id}>
                  <img  
                    src={artist.image}
                    alt="img1"
                    className="text-center mx-auto w-44"
                  />
                  <h3 className="text-center">{artist.artis}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Artist;
