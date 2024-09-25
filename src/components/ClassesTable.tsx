export default function ClassesTable() {
  return (
    <div>
      <table className="w-full border-collapse border border-orange-400 mb-4">
        <thead>
          <tr className="bg-yellow-200">
            <th className="border rounded-tl-* rounded-[8px] border-gray-300 p-2">Class Name</th>
            <th className="border border-gray-300 p-2">Duration</th>
            <th className="border rounded-tr-* rounded-[8px] border-gray-300 p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Beginner</td>
            <td className="border border-gray-300 p-2">8 weeks</td>
            <td className="border border-gray-300 p-2">€200</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Intermediate</td>
            <td className="border border-gray-300 p-2">10 weeks</td>
            <td className="border border-gray-300 p-2">€250</td>
          </tr>
          <tr>
            <td className="border rounded-bl-* rounded-[8px] border-gray-300 p-2">Advanced</td>
            <td className="border border-gray-300 p-2">12 weeks</td>
            <td className="border rounded-br-* rounded-[8px] border-gray-300 p-2">€300</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
