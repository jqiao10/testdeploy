import React from "react";

function AccountSetting(){
    return(
        <div>
            <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
         
        </div>

      </div>
    </div>
            </div>

    )
}
export default AccountSetting;