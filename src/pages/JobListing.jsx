import { getJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const JobListing = () => {
  const { isLoaded } = useUser();

  const { fn: fnJobs, data: dataJobs, loading: loadingJobs } = useFetch(getJobs, {});

  console.log(dataJobs);

  useEffect(() => {
    if (isLoaded) fnJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  return <div className=''>JobListing</div>;
};

export default JobListing;
