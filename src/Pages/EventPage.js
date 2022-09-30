import React from "react";
import { FiSettings } from "react-icons/fi";

const Events = () => {
  return (
    <div>
      <div className="event-details">
        <button className="event-cl">Cancel</button>
        <div className="event-icon">
          <FiSettings />
        </div>
      </div>
      <div className="section">
        <div className="sec-left">
          <section className="w-full max-w-lg px-3 mx-auto lg:px-0 lg:max-w-none">
            <h1 className="hidden font-semibold text-left lg:block mb-9 text-text-primary text-md md:text-5xl mytitle">
              Create your event
            </h1>
            <div className="clasify1">
              <p className="">🎉 My event is called</p>
              <input name="eventName" maxLength="30" className="clasify-int" />
              <p className="">🗓 It starts at</p>
              <div className="">
                <div className="react-datepicker-wrapper">
                  <div className="react-datepicker__input-container">
                    <input type="text" id="startTime" className="clasify-int" />
                  </div>
                </div>
              </div>
            </div>
            <div className="clasify2">
              <p>
                🏁 It ends at
                <span className="font-light text-grey-500"> (optional)</span>
              </p>
              <div className="">
                <div className="react-datepicker-wrapper">
                  <div className="react-datepicker__input-container">
                    <input type="text" className="clasify-int" />
                  </div>
                </div>
              </div>
            </div>
            <div className="clasify3">
              <p>
                📍 It’s happening at
                <span className="font-light text-grey-500"> (optional)</span>
              </p>
              <div className="mb-2">
                <input
                  name="location"
                  type="text"
                  autoComplete="off"
                  role="combobox"
                  aria-autocomplete="list"
                  aria-expanded="false"
                  placeholder="Location"
                  className="clasify-int"
                />
              </div>
            </div>
            <div className="clasify2">
              <p className="">
                🔗 Add a URL link
                <span className="font-light text-grey-500"> (optional)</span>
              </p>
              <input name="url" placeholder="URL" className="clasify-int" />
              <p className="">
                ✏️ Description
                <span className="font-light text-grey-500"> (optional)</span>
              </p>
              <textarea
                rows="4"
                name="description"
                style={{ height: "60px !important" }}
                className="clasify-int"
              ></textarea>
            </div>
          </section>
        </div>
        <div className="sec-right">
          <img className="sec-img" src="celebration.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Events;
