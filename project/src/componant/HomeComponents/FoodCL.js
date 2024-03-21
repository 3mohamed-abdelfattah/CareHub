import React, { Fragment, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../AllBars/Footer';
import Header from '../AllBars/Header';
import Sound from 'react-sound';
import NOtifi from "../Photos/sound.mp3"

const FoodList = () => {
    const [foods] = useState([
      { id: 1, name: 'تفاح', calories: 52, quantity: 100 },
      { id: 2, name: 'موز', calories: 89, quantity: 100 },
      { id: 3, name: 'جزر', calories: 41, quantity: 100 },
      { id: 4, name: 'دجاج مشوي', calories: 165, quantity: 100 },
      { id: 5, name: 'سلمون', calories: 206, quantity: 100 },
      { id: 6, name: 'تونة', calories: 144, quantity: 100 },
      { id: 7, name: 'فاصوليا', calories: 31, quantity: 100 },
      { id: 8, name: 'لحم بقر مشوي', calories: 250, quantity: 100 },
      { id: 9, name: 'بيتزا', calories: 285, quantity: 100 },
      { id: 10, name: 'فراولة', calories: 32, quantity: 100 },
      { id: 11, name: 'توت أزرق', calories: 57, quantity: 100 },
      { id: 12, name: 'خبز أسمر', calories: 247, quantity: 100 },
      { id: 13, name: 'بطاطس مقلية', calories: 365, quantity: 100 },
      { id: 14, name: 'حليب', calories: 61, quantity: 100 },
      { id: 15, name: 'جبنة شيدر', calories: 403, quantity: 100 },
      { id: 16, name: 'بيض مسلوق', calories: 68, quantity: 100 },
      { id: 17, name: 'عصير برتقال', calories: 45, quantity: 100 },
      { id: 18, name: 'ماء', calories: 0, quantity: 100 },
      { id: 19, name: 'بقلاوة', calories: 452, quantity: 100 },
      { id: 20, name: 'بروكلي', calories: 55, quantity: 100 },
      { id: 21, name: 'بطاطا مهروسة', calories: 110, quantity: 100 },
      { id: 22, name: 'بسكويت', calories: 49, quantity: 100 },
      { id: 23, name: 'تشيز برجر', calories: 303, quantity: 100 },
      { id: 24, name: 'تمر', calories: 282, quantity: 100 },
      { id: 25, name: 'توابل', calories: 5, quantity: 100 },
      { id: 26, name: 'توست', calories: 265, quantity: 100 },
      { id: 27, name: 'جزر مبشور', calories: 41, quantity: 100 },
      { id: 28, name: 'حمص', calories: 164, quantity: 100 },
      { id: 29, name: 'خس', calories: 5, quantity: 100 },
      { id: 30, name: 'دجاج مقلي', calories: 335, quantity: 100 },
      { id: 31, name: 'دجاج بالكاري', calories: 236, quantity: 100 },
      { id: 32, name: 'سمك مشوي', calories: 206, quantity: 100 },
      { id: 33, name: 'شوكولاتة', calories: 546, quantity: 100 },
      { id: 34, name: 'صلصة الطماطم', calories: 82, quantity: 100 },
      { id: 35, name: 'عسل', calories: 304, quantity: 100 },
      { id: 36, name: 'فول صويا', calories: 446, quantity: 100 },
      { id: 37, name: 'قهوة', calories: 2, quantity: 100 },
      { id: 38, name: 'كريمة', calories: 345, quantity: 100 },
      { id: 39, name: 'كيك', calories: 352, quantity: 100 },
      { id: 40, name: 'لبن', calories: 61, quantity: 100 },
      { id: 41, name: 'بطيخ', calories: 30, quantity: 100 },
      { id: 42, name: 'تونة معلبة', calories: 115, quantity: 100 },
      { id: 43, name: 'جوز الهند', calories: 354, quantity: 100 },
      { id: 44, name: 'حلقات بصل مقلية', calories: 356, quantity: 100 },
      { id: 45, name: 'حلقات بصل مشوية', calories: 150, quantity: 100 },
      { id: 46, name: 'خيار', calories: 16, quantity: 100 },
      { id: 47, name: 'دجاج محمر', calories: 335, quantity: 100 },
      { id: 48, name: 'سمك مقلي', calories: 206, quantity: 100 },
      { id: 49, name: 'سمك مقلي بالبانكو', calories: 232, quantity: 100 },
      { id: 50, name: 'سيزر سلاد', calories: 184, quantity: 100 },
      { id: 51, name: 'شيبس البطاطس', calories: 536, quantity: 100 },
      { id: 52, name: 'شيبس مالحة', calories: 152, quantity: 100 },
      { id: 53, name: 'صدر دجاج مشوي', calories: 165, quantity: 100 },
      { id: 54, name: 'صلصة الصويا', calories: 61, quantity: 100 },
      { id: 55, name: 'طماطم', calories: 18, quantity: 100 },
      { id: 56, name: 'عدس', calories: 116, quantity: 100 },
      { id: 57, name: 'فشار', calories: 31, quantity: 100 },
      { id: 58, name: 'فطيرة التفاح', calories: 237, quantity: 100 },
      { id: 59, name: 'فطيرة اللحم', calories: 250, quantity: 100 },
      { id: 60, name: 'فطيرة السبانخ', calories: 205, quantity: 100 },
      { id: 61, name: 'فلفل حار', calories: 40, quantity: 100 },
      { id: 62, name: 'فول', calories: 341, quantity: 100 },
      { id: 63, name: 'قطع الدجاج المقلية', calories: 326, quantity: 100 },
      { id: 64, name: 'كرات اللحم بصلصة الطماطم', calories: 283, quantity: 100 },
      { id: 65, name: 'كريسبي تشيكن', calories: 520, quantity: 100 },
      { id: 66, name: 'كسكس', calories: 112, quantity: 100 },
      { id: 67, name: 'كعك الجزر', calories: 327, quantity: 100 },
      { id: 68, name: 'لحم بقر مفروم', calories: 250, quantity: 100 },
      { id: 69, name: 'لحم خنزير مشوي', calories: 143, quantity: 100 },
      { id: 70, name: 'لحم دجاج مفروم', calories: 165, quantity : 100 },
      { id: 71, name: 'لفت', calories: 20, quantity: 100 },
      { id: 72, name: 'مكرونة', calories: 158, quantity: 100 },
      { id: 73, name: 'مكرونة بالجبنة', calories: 339, quantity: 100 },
      { id: 74, name: 'ملفوف', calories: 27, quantity: 100 },
      { id: 75, name: 'ملوخية', calories: 56, quantity: 100 },
      { id: 76, name: 'نقانق', calories: 190, quantity: 100 },
      { id: 77, name: 'همبرغر', calories: 250, quantity: 100 },
      { id: 78, name: 'ورق عنب', calories: 95, quantity: 100 },
      { id: 79, name: 'يقطين', calories: 26, quantity: 100 },
      { id: 80, name: 'يقطين مشوي', calories: 17, quantity: 100 },
      { id: 81, name: 'يوسفي', calories: 43, quantity: 100 },
      { id: 82, name: 'يوسفي مقشر', calories: 43, quantity: 100 },
      { id: 83, name: 'يوغورت', calories: 59, quantity: 100 },
      { id: 84, name: 'يومي', calories: 20, quantity: 100 },
      { id: 85, name: 'ينجو', calories: 121, quantity: 100 },
      { id: 86, name: 'ينجو مقلي', calories: 226, quantity: 100 },
      { id: 87, name: 'ينجو بالثوم', calories: 212, quantity: 100 },
      { id: 88, name: 'ينجو بالفلفل الحار', calories: 237, quantity: 100 },
      { id: 89, name: 'ينجو بالجبنة', calories: 279, quantity: 100 },
      { id: 90, name: 'ينجو بالكاري', calories: 220, quantity: 100 },
      { id: 91, name: 'ينجو بالبقسماط', calories: 261, quantity: 100 },
      { id: 92, name: 'ينجو بالعسل والخردل', calories: 215, quantity: 100 },
      { id: 93, name: 'ينجو بالكريمة', calories: 210, quantity: 100 },
      { id: 94, name: 'ينجو بالبارميزان', calories: 247, quantity: 100 },
      { id: 95, name: 'ينجو بالزبادي', calories: 200, quantity: 100 },
      { id: 96, name: 'ينجو بالليمون', calories: 190, quantity: 100 },
      { id: 97, name: 'ينجو بالزيتون', calories: 239, quantity: 100 },
      { id: 98, name: 'ينجو بالبصل', calories: 232, quantity: 100 },
      { id: 99, name: 'ينجو بالكزبرة', calories: 212, quantity: 100 },
      { id: 100, name: 'ينجو بالفلفل الأخضر', calories: 237, quantity: 100 },
      {
          id: 101,
          name: 'كشري',
          calories: 250,
          quantity: 100,
        },
        {
          id: 102,
          name: 'فول ودمياط',
          calories: 200,
          quantity: 100,
        },
        {
          id: 103,
          name: 'طعمية',
          calories: 150,
          quantity: 100,
        },
        {
          id: 104,
          name: 'فلافل',
          calories: 175,
          quantity: 100,
        },
        {
          id: 105,
          name: 'حمام محشي',
          calories: 300,
          quantity: 100,
        },
        {
          id: 106,
          name: 'محشي ورق عنب',
          calories: 200,
          quantity: 100,
        },
        {
          id: 107,
          name: 'كباب و كفتة',
          calories: 250,
          quantity: 100,
        },
        {
          id: 108,
          name: 'مكرونة بالبشاميل',
          calories: 300,
          quantity: 100,
        },
        {
          id: 109,
          name: 'ملوخية',
          calories: 150,
          quantity: 100,
        },
        {
          id: 110,
          name: 'كنافة',
          calories: 350,
          quantity: 100,
        },
        {
          id: 111,
          name: 'أم علي',
          calories: 300,
          quantity: 100,
        },
        {
          id: 112,
          name: 'فتة',
          calories: 250,
          quantity: 100,
        },
        {
          id: 113,
          name: 'بامية',
          calories: 150,
          quantity: 100,
        },
        {
          id: 114,
          name: 'محشي كوسة',
          calories: 200,
          quantity: 100,
        },
        {
          id: 115,
          name: 'محشي كرنب',
          calories: 200,
          quantity: 100,
        },
        {
          id: 116,
          name: 'مكرونة بالصلصة',
          calories: 250,
          quantity: 100,
        },
        {
          id: 117,
          name: 'مكرونة بالكبدة',
          calories: 300,
          quantity: 100,
        },
        {
          id: 118,
          name: 'مكرونة بالفرن',
          calories: 350,
          quantity: 100,
        },
        {
          id: 119,
          name: 'سلطة طحينة',
          calories: 200,
          quantity: 100,
        },
        {
          id: 120,
          name: 'سلطة خضراء',
          calories: 50,
          quantity: 100,
        },
        {
          id: 121,
          name: 'سلطة فواكه',
          calories: 100,
          quantity: 100,
        },
        {
          id: 122,
          name: 'بابا غنوج',
          calories: 150,
          quantity: 100,
        },
        {
          id: 123,
          name: 'متبل',
          calories: 150,
          quantity: 100,
        },
        {
          id: 141,
          name: 'دقة',
          calories: 200,
          quantity: 100,
        },
        {
          id: 142,
          name: 'عسل أسود',
          calories: 280,
          quantity: 100,
        },
        {
          id: 143,
          name: 'تمر',
          calories: 282,
          quantity: 100,
        },
        {
          id: 144,
          name: 'كنافة نابلسية',
          calories: 350,
          quantity: 100,
        },
        {
          id: 145,
          name: 'بسكويت جوز الهند',
          calories: 480,
          quantity: 100,
        },
        {
          id: 146,
          name: 'بسكويت الشاي',
          calories: 450,
          quantity: 100,
        },
        {
          id: 147,
          name: 'بسكويت غريبة',
          calories: 400,
          quantity: 100,
        },
        {
          id: 148,
          name: 'كحك العيد',
          calories: 450,
          quantity: 100,
        },
        {
          id: 149,
          name: 'بسكويت التمر',
          calories: 400,
          quantity: 100,
        },
        {
          id: 150,
          name: 'بسكويت اللوز',
          calories: 430,
          quantity: 100,
        },
        {
          id: 151,
          name: 'بسكويت جوز الهند بالقرفة',
          calories: 460,
          quantity: 100,
        },
        {
          id: 152,
          name: 'كعكة التمر',
          calories: 350,
          quantity: 100,
        },
        {
          id: 153,
          name: 'كعكة الجزر',
          calories: 327,
          quantity: 100,
        },
        {
          id: 154,
          name: 'كعكة البرتقال',
          calories: 300,
          quantity: 100,
        },
        {
          id: 155,
          name: 'كعكة الموز',
          calories: 340,
          quantity: 100,
        },
        {
          id: 156,
          name: 'كيكة الشوكولاتة',
          calories: 350,
          quantity: 100,
        },
        {
          id: 157,
          name: 'كعكة الفانيليا',
          calories: 300,
          quantity: 100,
        },
        {
          id: 158,
          name: 'كعكة الفراولة',
          calories: 320,
          quantity: 100,
        },
        {
          id: 159,
          name: 'كعكة الليمون',
          calories: 310,
          quantity: 100,
        },
        {
          id: 160,
          name: 'كعكة جوز الهند',
          calories: 340,
          quantity: 100,
        },
        {
          id: 161,
          name: 'كعكة اللوز',
          calories: 330,
          quantity: 100,
        },
        {
          id: 162,
          name: 'كعكة القهوة',
          calories: 320,
          quantity: 100,
        },
    ]);

      const [searchTerm, setSearchTerm] = useState('');
      const [selectedFoods, setSelectedFoods] = useState([]);
      const [totalCalories, setTotalCalories] = useState(0);
      const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);

    
      const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const handleFoodSelect = (food) => {
        setSelectedFoods([...selectedFoods, { ...food, quantity: 100 }]);
      };
    
      const handleQuantityChange = (foodId, newQuantity) => {
        const updatedSelectedFoods = selectedFoods.map((food) =>
          food.id === foodId ? { ...food, quantity: newQuantity } : food
        );
        setSelectedFoods(updatedSelectedFoods);
      };

      const handleCalculateCalories = () => {
        const total = selectedFoods.reduce((acc, curr) => {
          return acc + Math.round((curr.calories * curr.quantity) / 100);
        }, 0);
        setTotalCalories(total);
        setPlayStatus(Sound.status.PLAYING);
        toast.success(`إجمالي السعرات الحرارية: ${total}`,options);
  };

      const handleFoodRemove = (foodId) => {
        const updatedSelectedFoods = selectedFoods.filter(
          (food) => food.id !== foodId
        );
        setSelectedFoods(updatedSelectedFoods);
      };
    

      const options = {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    



      return (
        <Fragment>
          <Header />
          <div
            style={{
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: 'Arial, sans-serif',
              marginTop:"10%",
              marginBottom:"10%",
            }}
          >
            <h1 style={{ 
                fontSize: '25px',
                marginTop:"10%",
                  color: 'black',
                  fontWeight: 'bolder',
            }}>اتّخذ قرارات صحية واعية، من خلال معرفة سعرات كلّ لقمة</h1>
            <input
              type="text"
              placeholder="أبحث عن الطعام لحساب سعراته"
              value={searchTerm}
              onChange={handleSearch}
              style={{
                padding: '8px',
                marginBottom: '20px',
                width: '100%',
                fontSize: '16px',
                textAlign: 'center',
              }}
            />
            <button
              onClick={handleCalculateCalories}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#1F5357',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
              }}
            >
              حساب السعرات الحرارية
            </button>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <ul style={{ listStyle: 'none', padding: '20px', width: '45%' }}>
                {foods
                  .filter((food) =>
                    food.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .slice(0, 8) // Display only the first 8 items
                  .map((food) => (
                    <li key={food.id}>
                      <span style={{ fontSize: '18px' }}>{food.name}</span> -{' '}
                      <span style={{ fontSize: '16px' }}>{food.calories}</span> سعرة حرارية{' '}
                      <button
                        onClick={() => handleFoodSelect(food)}
                        style={{
                          padding: '8px 12px',
                          margin: '2px',
                          fontSize: '14px',
                          cursor: 'pointer',
                          backgroundColor: '#4CAF50',
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          fontWeight: 'bold',
                        }}
                      >
                        اختيار
                      </button>
                    </li>
                  ))}
              </ul>
              <div style={{ width: '45%' }}>
                <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>الأطعمة المحددة</h2>
                <ul style={{ listStyle: 'none', padding: '0' }}>
                  {selectedFoods.map((food) => (
                    <li key={food.id}>
                      <span style={{ fontSize: '18px' }}>{food.name}</span> -{' '}
                      <input
                        type="number"
                        value={food.quantity}
                        onChange={(e) =>
                          handleQuantityChange(food.id, e.target.value)
                        }
                        style={{
                          width: '25%',
                          marginRight: '10px',
                          fontSize: '14px',
                        }}
                      />
                      جرام -{' '}
                      <button
                        onClick={() => handleFoodRemove(food.id)}
                        style={{
                          padding: '8px 12px',
                          fontSize: '14px',
                          cursor: 'pointer',
                          backgroundColor: '#f44336',
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          fontWeight: 'bold',
                        }}
                      >
                        حذف
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Footer />
          <Sound
          url={NOtifi}
          playStatus={playStatus}
          onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)}
        />
        </Fragment>
      );
    };
    
    export default FoodList;