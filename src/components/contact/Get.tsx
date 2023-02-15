import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { deleteCard, getCards } from '../../actions/card';

function Create() {
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getCardsData();
  }, []);

  async function getCardsData() {
    // setLoading(true);
    // const res = await dispatch(getCards());
    // setCards(res);
    // setLoading(false);
  }

  async function deleteCardData(_UUID: any) {
    try {
      // console.log('delete card', _UUID);
      // await dispatch(deleteCard(_UUID));
      // await getCardsData();
    } catch (error) {
      alert('Something Wrong.');
    }
  }

  return (
    <div>
      <div className="n-container">
        <div className="flex justify-center mt-20">
          <Link to={'/'}>
            <img src="/img/HorizontalLogoNegative.png" className="cursor-pointer w-[400px]" alt="" />
          </Link>
        </div>
        <h1 className="text-4xl font-bold underline text-center">Cards</h1>
        <div className="flex justify-end mt-10">
          <Link to={'/contact/create'}>
            <div className="px-4 py-2 border border-[#5C6BC0] text-[#5C6BC0] cursor-pointer font-medium text-center rounded w-32 shadow-lg">
              Add
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Create;
