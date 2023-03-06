import { useReducer } from 'react';

import Head from 'next/head';
import Button1 from '@/components/Button1';
import Button2 from '@/components/Button2';
import Button3 from '@/components/Button3';
import Button4 from '@/components/Button4';
import Button5 from '@/components/Button5';
import Button7 from '@/components/Button7';
import Button8 from '@/components/Button8';
import Button9 from '@/components/Button9';


export default function Home() {

  const [localState, updateLocalState] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      openBottomBar: false,
    }
  );

  return (
    <>
      <Head>
        <title>Interactive Console 2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-full w-full max-w-[1180px] max-h-[820px] m-auto relative'>
        <div className='bg-black flex flex-1'>
          <div className='w-fit h-fit max-h-[820px]'>
            <img src="/images/left-pane.svg" alt="left-pane" className=" object-contain w-fit h-fit max-h-[820px]" />
          </div>
          <div className='mx-auto box-border flex-col h-full max-h-[820px] items-center justify-center'>
            <div className='flex grow h-[800px]'>
              <div className="grid grid-cols-2 grid-rows-2 gap-3 p-2 mx-auto box-border h-full">
                <div className='row-span-2 h-full max-h-[820px]'>
                  <img
                    className="object-contain h-full"
                    src="/images/map-widget.svg"
                    alt="map-widget"
                  />
                </div>
                <div className="w-full h-full">
                  <img
                    className="object-contain h-full"
                    src="/images/calendar-widget.svg"
                    alt="calendar-widget"
                  />
                </div>
                <div className="w-full h-full">
                  <img
                    className="object-contain h-full"
                    src="/images/music-widget.svg"
                    alt="music-widget"
                  />
                </div>
              </div>
            </div>
            {localState.openBottomBar === false && (
              <div className='flex flex-none items-center w-full'>
                <button type="button" className="h-4 mx-auto" onClick={() => updateLocalState({ openBottomBar: true })}>
                  <svg width="174" height="4" viewBox="0 0 180 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" width="180" height="4" rx="2" fill="#04D5B7" />
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              </div>
            )}
          </div>
        </div>
        {localState.openBottomBar === true && (
          <div
            className='rounded-t-[2rem]  bg-[url("/images/bottom-bar-bg.svg")] w-full h-[104px] absolute bottom-0 left-0 right-0 bg-black flex items-center justify-center space-x-20'
            onClick={() => updateLocalState({ openBottomBar: false })}
          >
            <Button1 />
            <Button2 />
            <Button3 />
            <Button4 />
            <Button5 />
            <Button4 />
            <Button7 />
            <Button8 />
            <Button9 />
          </div>
        )}
      </div>
    </>
  )
}
