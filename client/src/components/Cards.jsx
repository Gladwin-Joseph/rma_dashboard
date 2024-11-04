import React, { useEffect, useState } from 'react';
import axios from 'axios';
const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginTop: '60px',
  };
  
  const cardTitleStyle = {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#1e293b',
    fontFamily: '"Inter", sans-serif',
  };
  
  const cardValueStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#334155',
    fontFamily: '"Inter", sans-serif',
    padding: '10px',
    
  };
  
  
const Cards = () => {
    const [rpmosCounts, setRpmosCounts] = useState({
        totalCreated: 0,
        nullSONumberCount: 0,
        notNullSONumberCount: 0,
      });

      const [srpmosCounts, setSRpmosCounts] = useState({
        totalCreated: 0,
        nullSONumberCount: 0,
        notNullSONumberCount: 0,
      });

      const [regicCounts, setRegicCounts] = useState({
        totalCreated: 0,
        nullSONumberCount: 0,
        notNullSONumberCount: 0,
      });

      const [sregicCounts, setSregicCounts] = useState({
        totalCreated: 0,
        nullSONumberCount: 0,
        notNullSONumberCount: 0,
      });

      const [rep2psCounts, setRep2psCounts] = useState({
        totalCreated: 0,
        nullSONumberCount: 0,
        notNullSONumberCount: 0,
      });

      const [rpsrCounts, setRpsrCounts] = useState({
        totalCreated: 0,
        nullSONumberCount: 0,
        notNullSONumberCount: 0,
      });

      const [rep2ppCounts, setRep2ppCounts] = useState({
        totalCreated: 0,
        nullSONumberCount: 0,
        notNullSONumberCount: 0,
      });
      useEffect(() => {
        const fetchNotificationCounts = async () => {
          try {
            const response = await axios.get('https://rma-backend-vhsq.onrender.com/api/rpmoscounts');
            const data = response.data[0]; 
            setRpmosCounts({
                totalCreated: data.Total_Rpmos_Created,
                nullSONumberCount: data.Null_SONumber_Count,
                notNullSONumberCount: data.Not_Null_SONumber_Count,
            });
          } catch (error) {
            console.error("Error fetching notification counts:", error);
          }
        };
    
        fetchNotificationCounts();
      }, []);

      useEffect(() => {
        const fetchSrpmosCounts = async () => {
          try {
            const response = await axios.get('https://rma-backend-vhsq.onrender.com/api/srpmoscounts');
            const data = response.data; 
            setSRpmosCounts({
                totalCreated: data.Total_SRPMOS_Created,
                nullSONumberCount: data.Null_SONumber_Count,
                notNullSONumberCount: data.Not_Null_SONumber_Count,
            });
          } catch (error) {
            console.error("Error fetching notification counts:", error);
          }
        };
    
        fetchSrpmosCounts();
      }, []);


      useEffect(() => {
        const fetchRegicCounts = async () => {
          try {
            const response = await axios.get('https://rma-backend-vhsq.onrender.com/api/regiccounts');
            const data = response.data; 
            setRegicCounts({
                totalCreated: data.Total_REGIC_Created,
                nullSONumberCount: data.Null_SONumber_Count,
                notNullSONumberCount: data.Not_Null_SONumber_Count,
            });
          } catch (error) {
            console.error("Error fetching notification counts:", error);
          }
        };
    
        fetchRegicCounts();
      }, []);

      useEffect(() => {
        const fetchSRegicCounts = async () => {
          try {
            const response = await axios.get('https://rma-backend-vhsq.onrender.com/api/sregiccounts');
            const data = response.data; 
            setSregicCounts({
                totalCreated: data.Total_SREGIC_Created,
                nullSONumberCount: data.Null_SONumber_Count,
                notNullSONumberCount: data.Not_Null_SONumber_Count,
            });
          } catch (error) {
            console.error("Error fetching notification counts:", error);
          }
        };
    
        fetchSRegicCounts();
      }, []);

      useEffect(() => {
        const fetchRep2psCounts = async () => {
          try {
            const response = await axios.get('https://rma-backend-vhsq.onrender.com/api/rep2pscounts');
            const data = response.data; 
            setRep2psCounts({
                totalCreated: data.Total_REP2PS_Created,
                nullSONumberCount: data.Null_SONumber_Count,
                notNullSONumberCount: data.Not_Null_SONumber_Count,
            });
          } catch (error) {
            console.error("Error fetching notification counts:", error);
          }
        };
    
        fetchRep2psCounts();
      }, []);

      useEffect(() => {
        const fetchRpsrCounts = async () => {
          try {
            const response = await axios.get('https://rma-backend-vhsq.onrender.com/api/rpsrcounts');
            const data = response.data; 
            setRpsrCounts({
                totalCreated: data.Total_RPSR_Created,
                nullSONumberCount: data.Null_SONumber_Count,
                notNullSONumberCount: data.Not_Null_SONumber_Count,
            });
          } catch (error) {
            console.error("Error fetching notification counts:", error);
          }
        };
    
        fetchRpsrCounts();
      }, []);

      useEffect(() => {
        const fetchRep2ppCounts = async () => {
          try {
            const response = await axios.get('https://rma-backend-vhsq.onrender.com/api/rep2ppcounts');
            const data = response.data; 
            setRep2ppCounts({
                totalCreated: data.Total_REP2PP_Created,
                nullSONumberCount: data.Null_SONumber_Count,
                notNullSONumberCount: data.Not_Null_SONumber_Count,
            });
          } catch (error) {
            console.error("Error fetching notification counts:", error);
          }
        };
    
        fetchRep2ppCounts();
      }, []);
    
  return (
    <main style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px 0 rgba(0,0,0,.05)'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px'  }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Total RPMOS</h2>
            <div style={cardValueStyle}>{rpmosCounts.totalCreated}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>RPMOS SO Not Generated</h2>
            <div style={cardValueStyle}>{rpmosCounts.nullSONumberCount}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>RPMOS SO Generated</h2>
            <div style={cardValueStyle}>{rpmosCounts.notNullSONumberCount}</div>
          </div>
        </div>  

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Total SRPMOS</h2>
            <div style={cardValueStyle}>{srpmosCounts.totalCreated}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>SRPMOS SO Not Generated</h2>
            <div style={cardValueStyle}>{srpmosCounts.nullSONumberCount}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>SRPMOS SO Generated</h2>
            <div style={cardValueStyle}>{srpmosCounts.notNullSONumberCount}</div>
          </div>
        </div> 
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Total REGIC</h2>
            <div style={cardValueStyle}>{regicCounts.totalCreated}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>REGIC SO Not Generated</h2>
            <div style={cardValueStyle}>{regicCounts.nullSONumberCount}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>REGIC SO Generated</h2>
            <div style={cardValueStyle}>{regicCounts.notNullSONumberCount}</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Total SREGIC</h2>
            <div style={cardValueStyle}>{sregicCounts.totalCreated}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>SREGIC SO Not Generated</h2>
            <div style={cardValueStyle}>{sregicCounts.nullSONumberCount}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>SREGIC SO Generated</h2>
            <div style={cardValueStyle}>{sregicCounts.notNullSONumberCount}</div>
          </div>
        </div>  

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Total REP2PS</h2>
            <div style={cardValueStyle}>{rep2psCounts.totalCreated}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>REP2PS SO Not Generated</h2>
            <div style={cardValueStyle}>{rep2psCounts.nullSONumberCount}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>REP2PS SO Generated</h2>
            <div style={cardValueStyle}>{rep2psCounts.notNullSONumberCount}</div>
          </div>
        </div>  

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Total RPSR</h2>
            <div style={cardValueStyle}>{rpsrCounts.totalCreated}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>RPSR SO Not Generated</h2>
            <div style={cardValueStyle}>{rpsrCounts.nullSONumberCount}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>RPSR SO Generated</h2>
            <div style={cardValueStyle}>{rpsrCounts.notNullSONumberCount}</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Total RE2PP</h2>
            <div style={cardValueStyle}>{rep2ppCounts.totalCreated}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>RE2PP SO Not Generated</h2>
            <div style={cardValueStyle}>{rep2ppCounts.nullSONumberCount}</div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>RE2PP SO Generated</h2>
            <div style={cardValueStyle}>{rep2ppCounts.notNullSONumberCount}</div>
          </div>
        </div>  
    </main>
  )
}

export default Cards