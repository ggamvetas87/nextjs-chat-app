// app/access-denied/page.tsx

export default function AccessDenied() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl p-10">
          Converso - AI Mock Chatbot
        </h1>
        <h3>403 - Access Denied</h3>
        <p className="text-lg text-gray-600">
          This demo is available by invitation only.
        </p>
        <p className="text-lg text-gray-600">
          For access contact me by sending email to 
          <span className="text-red-500 ml-1">ggamvetas[at]gmail.com</span>
        </p>
      </div>
    </main>
  );
}
