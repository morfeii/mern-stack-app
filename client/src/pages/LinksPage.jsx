import React, { useState, useContext, useCallback, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { LinkList } from '../components/LinksList';
import { Loader } from '../components/Loader';

export const LinksPage = () => {
  const [links, setLinks] = useState([]);
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchLinks = useCallback(async() => {
    try {
      const fetched = await request(`/api/link`, 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setLinks(fetched);
    } catch (error) {}
  }, [token, request]);

  useEffect(() => {
    fetchLinks()
  }, [fetchLinks]);

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      { !loading && <LinkList links={links} /> }
    </div>
  )
};
