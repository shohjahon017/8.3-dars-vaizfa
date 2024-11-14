// src/components/JobForm.tsx
import React, { useState } from "react";

interface JobData {
  logoUrl: string;
  companyName: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  workTime: string;
  jobType: string;
  location: string;
  skills: {
    fullstack: boolean;
    midweight: boolean;
    python: boolean;
    react: boolean;
  };
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<JobData>({
    logoUrl: "",
    companyName: "",
    isNew: false,
    isFeatured: false,
    position: "",
    workTime: "",
    jobType: "",
    location: "",
    skills: {
      fullstack: false,
      midweight: false,
      python: false,
      react: false,
    },
  });

  const [dataList, setDataList] = useState<JobData[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      skills: {
        ...prevData.skills,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDataList([...dataList, formData]);
    setFormData({
      logoUrl: "",
      companyName: "",
      isNew: false,
      isFeatured: false,
      position: "",
      workTime: "",
      jobType: "",
      location: "",
      skills: {
        fullstack: false,
        midweight: false,
        python: false,
        react: false,
      },
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">
          Vakansiya ma'lumotlarini kiriting
        </h2>

        <label className="block mb-2">Logotip URL</label>
        <input
          type="text"
          name="logoUrl"
          value={formData.logoUrl}
          onChange={handleChange}
          placeholder="Logotip URL manzilini kiriting"
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Kompaniya nomi</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Kompaniya nomi"
          className="w-full p-2 border rounded mb-4"
        />

        <div className="flex items-center gap-4 mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isNew"
              checked={formData.isNew}
              onChange={handleChange}
              className="mr-2"
            />
            Yangi
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
              className="mr-2"
            />
            Featured
          </label>
        </div>

        <label className="block mb-2">Lavozim</label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Fullstack Developer"
          className="w-full p-2 border rounded mb-4"
        />

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block mb-2">Vaqt</label>
            <select
              name="workTime"
              value={formData.workTime}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Tanlang</option>
              <option value="half-time">Half-time</option>
              <option value="full-time">Full-time</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Ish turi</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Tanlang</option>
              <option value="remote">Online</option>
              <option value="onsite">Onsite</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Joylashuv</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Tanlang</option>
              <option value="tashkent">Tashkent</option>
              <option value="samarkand">Fergana</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Ko'nikmalar</label>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="fullstack"
                checked={formData.skills.fullstack}
                onChange={handleSkillChange}
                className="mr-2"
              />
              Fullstack
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="midweight"
                checked={formData.skills.midweight}
                onChange={handleSkillChange}
                className="mr-2"
              />
              JavaScript
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="python"
                checked={formData.skills.python}
                onChange={handleSkillChange}
                className="mr-2"
              />
              Python
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="react"
                checked={formData.skills.react}
                onChange={handleSkillChange}
                className="mr-2"
              />
              React
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded"
        >
          Saqlash
        </button>
      </form>

      {dataList.map((data, index) => (
        <div key={index} className="mt-6 p-4 border rounded bg-gray-100">
          <h3 className="text-lg font-bold mb-2">Kiritilgan ma'lumotlar:</h3>
          <p>
            <strong>Kompaniya:</strong> {data.companyName}
          </p>
          <p>
            <strong>Logotip URL:</strong> {data.logoUrl}
          </p>
          <p>
            <strong>Lavozim:</strong> {data.position}
          </p>
          <p>
            <strong>Yangi:</strong> {data.isNew ? "Ha" : "Yo'q"}
          </p>
          <p>
            <strong>Featured:</strong> {data.isFeatured ? "Ha" : "Yo'q"}
          </p>
          <p>
            <strong>Joylashuv:</strong> {data.location}
          </p>
          <p>
            <strong>Ish turi:</strong> {data.jobType}
          </p>
          <p>
            <strong>Vaqt:</strong> {data.workTime}
          </p>
          <p>
            <strong>Ko'nikmalar:</strong>
            {Object.entries(data.skills)
              .filter(([_, v]) => v)
              .map(([k]) => k)
              .join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Form;
