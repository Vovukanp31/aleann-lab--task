import React, {useState} from 'react';

interface Props {
    err: string;
}

const OnError = ({err}: Props) => {

    const [showErrDetails, setShowErrDetails] = useState<boolean>(false)

    return (
        <div className='flex items-center justify-center min-h-screen min-w-screen'>

            <div id="alert-additional-content-2" className="p-4 mb-4 border border-red-300 rounded-lg bg-red-50" role="alert">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-red-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Info</span>
                    <h3 className="text-lg font-medium text-red-900 dark:text-red-800">Oops, there was an error</h3>
                </div> 
                
                <div className='flex'>
                    <button onClick={() => setShowErrDetails(!showErrDetails)} type="button" className="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center">
                        <svg aria-hidden="true" className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
                            See error details
                    </button>
                    <button onClick={() => window.location.reload()} type="button" className="text-red-900 bg-transparent border border-red-900 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
                            Reload
                    </button>
                </div>

                    <span className={`${showErrDetails ? 'block' : 'hidden'} p-4 text-red-900`}>{err}</span>
            </div>
        
        </div>
    );
};

export default OnError;