import styled from "styled-components";
import { getcarCollection } from "../api/Collection";
import { useEffect, useState } from "react";
import { Pagination, Select } from "antd";

const Cars = () => {
  const [Data, setData] = useState();
  const [total, settotal] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const pagination = (e) => {
    console.log(e);
    setcurrentPage(e);
  };


  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const res= new URLSearchParams()
  res.append("pagination[page]=",currentPage);
  res.append("pagination[pageSize]=",6);



  const getData = async () => {
    const payload = {
      page: currentPage,
      pageSize: 6,
    };
   
    const req = await getcarCollection(payload);

    if (req?.data) {
      setData(req.data);
      settotal(req?.meta?.pagination?.total);
    } else {
    }
  };
  useEffect(() => {
    getData();
  }, [currentPage]);

  return (
    <CarImages>
      <h1>Cars </h1>
      <div className="filter">
        <p className="filter-name"> Filter </p>
        <Select
        
        style={{
          width: 120,
        }}
        defaultValue="All"
        onChange={handleChange}
        options={[
            {
                value: 'All',
              label: 'All',

            },
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'tom',
              label: 'Tom',
            },
          ]}
      />

      </div>
   

      <div className="main-box">
        {Data?.map((e, i) => (
          <div className="img-box" key={i}>
            <div className="box" key={i}>
              <img
                src={e?.attributes?.Carimg?.data[0]?.attributes?.url}
                alt=""
              />
              <p>{e?.attributes?.Name}</p>
              <p>{e?.attributes?.Description}</p>
              <div className="info">
                <p>{e?.attributes?.CarNo} </p>
                {
                    e?.attributes?.buycar && 
                    <button style={{
                        color: e?.attributes?.buycar?.TextColor,
                        background:e?.attributes?.buycar?.backgroundColor,
                        width: e?.attributes?.buycar?.width,
                        padding:"5px 10px",
                        border:"none",
                        borderRadius:"5px"
                    

                    }}>{e?.attributes?.buycar?.ButtonName}</button>
                }
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination
          defaultCurrent={1}
          pageSize={6}
          onChange={(e) => pagination(e)}
          total={total}
        />
      </div>
    </CarImages>
  );
};
export default Cars;

const CarImages = styled.div`
  background: #f9fafb;
  min-height: 100vh;
  h1 {
    text-align: center;
    padding: 20px;
    font-size: 40px;
    font-weight: 600;
    color: #e27d60;
  }
  .filter{
    display:flex;
    align-items: center;
    justify-content: end;
    gap:10px;
    padding: 0 40px;

  }
  .filter-name{
    font-size: 25px;
    font-weight: 600;
    color: #e27d60;
  }
  .main-box {
    margin: 40px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
  .img-box {
    width: 350px;
    padding: 10px;
    background: white;
    img {
      width: 100%;
      height: 300px;
      border-radius: 10px;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
  }
  .pagination {
    display: flex;
    align-items: end;
    justify-content: end;
    padding: 20px;
  }
`;
