import { useEffect, useState } from 'react';


const useFetch = (url) => {
  const [users, setUsers] = useState([]);
  const [suite, setSuite] = useState(0);
  const [appt, setAppt] = useState(0);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {

      fetch(url, {
        method: 'GET'
      }).then(res => res.json())
        .then(data => {
          setUsers(data);
          let apptNow = 0;
          let suiteNow = 0;

          // check each user address for 'Suite' for 'Appartment'
          data.map(user => {
            let fLetter = user.address.suite.charAt(0);
            if (fLetter === 'A') apptNow += 1;
            if (fLetter === 'S') suiteNow += 1;
            return true;
          });

          setAppt(apptNow);
          setSuite(suiteNow);
          setIsloading(false);
        })
    }, 100);
  }, [url]);

  return ({ users, suite, appt, isLoading });

}

export default useFetch;