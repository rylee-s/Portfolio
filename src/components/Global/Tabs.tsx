import React from "react";

interface Tab {
  name: string;
  component: JSX.Element;
}

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [openTab, setOpenTab] = React.useState(0);
  document.title = tabs[openTab].name;
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="mb-0 flex list-none flex-row flex-wrap pb-4 pt-3"
            role="tablist"
          >
            {tabs.map((tab, index) => (
              <li
                aria-selected={openTab === index}
                className="-mb-px mr-2 flex-auto text-center last:mr-0"
                role="tab"
                key={index}
              >
                <a
                  data-active={openTab === index}
                  className="block rounded bg-gray-100 py-2  text-xs font-bold uppercase leading-normal text-blue-700 data-active:bg-blue-700 data-active:text-gray-100"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index);
                  }}
                  data-toggle="tab"
                >
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded">
            <div className="flex lg:px-4 lg:py-5">
              <div className="tab-content tab-space w-full">
                {tabs.map((tab, index) => (
                  <div
                    className={openTab === index ? "block" : "hidden"}
                    key={index}
                  >
                    {tab.component}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
