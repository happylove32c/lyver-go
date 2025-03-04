import React from 'react';

const ChatPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md p-4 flex flex-col">
        {/* Profile Section */}
        <div className="flex items-center space-x-3">
        <img src="https://i.pinimg.com/736x/65/5b/61/655b6152ca24fd6b2baa4ebedce4c0ee.jpg" alt="Profile" className="w-12 h-12 rounded-full" />
          <div>
            <h2 className="text-lg font-semibold">Toko Sebelah LLC</h2>
            <p className="text-sm text-gray-500">Planning projects</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6">
          <ul>
            <li className="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-md">
              <img src="https://www.svgrepo.com/show/533182/inbox-arrow-down.svg" alt="Inbox" className="w-5 h-5" />
              <span className="ml-3">All Inbox</span>
            </li>
            <li className="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-md">
              <img src="https://www.svgrepo.com/show/438928/unstarred.svg" alt="Starred" className="w-5 h-5" />
              <span className="ml-3">Starred</span>
            </li>
            <li className="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-md">
              <img src="https://www.svgrepo.com/show/487811/snooze.svg" alt="Snoozed" className="w-5 h-5" />
              <span className="ml-3">Snoozed</span>
            </li>
            <li className="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-md">
              <img src="https://www.svgrepo.com/show/346790/draft.svg" alt="Drafts" className="w-5 h-5" />
              <span className="ml-3">Drafts</span>
            </li>
            <li className="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-md">
              <img src="https://www.svgrepo.com/show/533017/trash-blank-alt.svg" alt="Deleted" className="w-5 h-5" />
              <span className="ml-3">Deleted</span>
            </li>
          </ul>
        </div>

        {/* Manage Labels */}
        <button className="mt-auto bg-yellow-500 text-white py-2 px-4 rounded-md">
          Manage All Labels
        </button>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 shadow-md">
          <h2 className="text-xl font-semibold">Messages</h2>
          <div className="flex space-x-3">
            <img src="https://www.svgrepo.com/show/532551/search-alt-1.svg" alt="Search" className="w-5 h-5" />
            <img src="https://www.svgrepo.com/show/506315/settings.svg" alt="Settings" className="w-5 h-5" />
          </div>
        </div>

        {/* Chat List & Messages */}
        <div className="flex flex-1">
          {/* Chat List */}
          <div className="w-1/3 bg-white p-4 border-r">
            {[
              { name: 'Jonathan Benitez', time: '4:45 pm', image:"https://i.pinimg.com/736x/98/a6/aa/98a6aadc34b3519d5c4e0a6150f0701f.jpg" },
              { name: 'Aya Mason', time: '2:30 pm', image:"https://i.pinimg.com/736x/5f/46/2d/5f462dcfba987090d3314ca981013b6c.jpg" },
              { name: 'Vijay Choi', time: '7:58 pm', image:"https://i.pinimg.com/736x/ed/97/17/ed97179b1a21251a1b4f3c2f03cd9273.jpg" },
              { name: 'Addis Rush', time: '8:05 pm', image:"https://i.pinimg.com/736x/84/a2/92/84a292c7b9044ad85df7e20c63d2a2c8.jpg" },
              { name: 'Zunaira Thorne', time: '12:35 pm', image:"https://i.pinimg.com/736x/0f/24/c0/0f24c0166a4075b728f40f3766467258.jpg" },
              { name: 'Mikolaj Gonzalez', time: '6:42 pm', image:"https://i.pinimg.com/736x/b8/6b/a3/b86ba3d740823f95760aeff2e2c85cae.jpg" },
              { name: 'Theo Adminon', time: '11:22 am', image:"https://i.pinimg.com/736x/fd/fe/c7/fdfec784798432a2c219e000f1f54763.jpg" }
            ].map((chat, index) => (
              <div key={index} className="flex items-center p-3 hover:bg-gray-100 rounded-md">
                <img src={chat.image} alt="User" className="w-10 h-10 rounded-full" />
                <div className="ml-3">
                  <h3 className="text-md font-semibold">{chat.name}</h3>
                  <p className="text-sm text-gray-500">{chat.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Messages */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Today, 31 July 2021, 14:30</p>
                <h2 className="text-lg font-semibold">
                  Where To Look For Cheap Brochure Printing Services
                </h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <img src="https://i.pinimg.com/736x/65/5b/61/655b6152ca24fd6b2baa4ebedce4c0ee.jpg" alt="User" className="w-8 h-8 rounded-full" />
                  <div className="bg-gray-100 shadow-md p-3 rounded-md">
                    <p>Ever wondered how some graphic designers always manage to produce?</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-md">
                    <p>Freelance Design Tricks</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <img src="https://i.pinimg.com/736x/65/5b/61/655b6152ca24fd6b2baa4ebedce4c0ee.jpg" alt="User" className="w-8 h-8 rounded-full" />
                  <div className="bg-gray-100 shadow-md p-3 rounded-md">
                    <p>Successful businesses have many things</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-md">
                    <p>Attending a trade show can be very effective</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t bg-white flex items-center space-x-3">
              <input
                type="text"
                placeholder="Add your message..."
                className="flex-1 p-2 border rounded-md"
              />
              <button className="bg-blue-500 flex flex-row gap-4 text-white px-4 py-2 rounded-md">
              <img src="https://www.svgrepo.com/show/522268/send-email.svg" alt="" className="h-6" />  Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
