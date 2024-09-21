import React, { useState } from 'react';

const HealthLiteracyResults = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const assessmentResults = [
    { id: 1, name: 'การเข้าถึงข้อมูล', status: 'ความรอบรู้เพียงพอ' },
    { id: 2, name: 'การเข้าใจข้อมูล', status: 'ความรอบรู้อาจไม่เพียงพอ' },
    { id: 3, name: 'การซักถามข้อมูล', status: 'ความรอบรู้เพียงพอ' },
    { id: 4, name: 'การตัดสินใจ', status: 'ความรอบรู้อาจไม่เพียงพอ' },
    { id: 5, name: 'การปฏิบัติ', status: 'ความรอบรู้ไม่เพียงพอ' },
  ];

  const areaNames = [
    'การเข้าถึงข้อมูล',
    'การเข้าใจข้อมูล',
    'การซักถามข้อมูล',
    'การตัดสินใจ',
    'การปฏิบัติ'
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="p-4">
        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-bold flex-grow">
            <div className='text-green-500'>ผลการประเมิน Health Literacy</div> 
            
            <span className="text-sm font-normal">Health Literacy Assessment Results</span>
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="font-bold text-gray-600 mb-2">ชื่อ-สกุล/Name-Surname</h3>
          <p className="text-lg mb-4">นายอนุวัตร สวัสดิวงศ์</p>
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-sm text-gray-600">อายุ</p>
              <p className="text-sm text-gray-600">Age</p>
              <p>55</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">เลขบัตรประชาชน</p>
              <p className="text-sm text-gray-600">ID No.</p>
              <p>1234567890123</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">ระดับความรอบรู้ด้านสุขภาพ</p>
              <p className="text-sm text-gray-600">Health Literacy Level</p>
              <p className="text-green-500">เพียงพอ</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-4">
  <h3 className="font-bold mb-2">ผลการประเมินทั้ง 5 ด้าน</h3>
  {assessmentResults.map((result) => (
    <div key={result.id} className="flex items-center mb-2">
      <span className="flex-grow">{`ด้านที่ ${result.id} ${result.name}`}</span>
      <div className="flex items-center">
        <span
          className={`w-4 h-4 rounded-full mr-2 ${
            result.status === 'ความรอบรู้เพียงพอ' ? 'bg-green-500' :
            result.status === 'ความรอบรู้อาจไม่เพียงพอ' ? 'bg-yellow-500' :
            'bg-red-500'
          }`}
        ></span>
        <span className="text-sm">
          {result.status}
        </span>
      </div>
    </div>
  ))}
</div>



        <div className="grid grid-cols-5 gap-4">
          {areaNames.map((name, index) => (
            <button
              key={index + 1}
              className={`p-4 rounded-lg shadow text-center ${
                selectedArea === index + 1 ? 'bg-green-500 text-white' : 'bg-white'
              }`}
              onClick={() => setSelectedArea(index + 1)}
            >
              <img src={`/icon-${index + 1}.png`} alt="" className="w-12 h-12 mx-auto mb-2" />
              <p>{`ด้านที่ ${index + 1}`}</p>
              <p>{name}</p>
            </button>
          ))}
        </div>

        {selectedArea && (
          <div className="bg-white rounded-lg shadow p-4 mt-4">
            <h3 className="font-bold mb-2">{`ด้านที่ ${selectedArea} ${areaNames[selectedArea - 1]}`}</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <span>ผลการประเมินครั้งล่าสุด</span>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  assessmentResults.find(result => result.id === selectedArea).status === 'ความรอบรู้เพียงพอ' ? 'bg-green-500 text-white' :
                  assessmentResults.find(result => result.id === selectedArea).status === 'ความรอบรู้อาจไม่เพียงพอ' ? 'bg-yellow-500 text-white' :
                  'bg-red-500 text-white'
        }`}>
          {assessmentResults.find(result => result.id === selectedArea).status}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span>ผลการประเมินครั้งที่ 1</span>
        <span className={`px-2 py-1 rounded-full text-sm ${
          assessmentResults.find(result => result.id === selectedArea).status === 'ความรอบรู้เพียงพอ' ? 'bg-green-500 text-white' :
          assessmentResults.find(result => result.id === selectedArea).status === 'ความรอบรู้อาจไม่เพียงพอ' ? 'bg-yellow-500 text-white' :
          'bg-red-500 text-white'
        }`}>
          {assessmentResults.find(result => result.id === selectedArea).status}
        </span>
      </div>
    </div>
  </div>
)}

      
      </main>
    </div>
  );
};

export default HealthLiteracyResults;