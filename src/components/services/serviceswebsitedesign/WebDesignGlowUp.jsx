import React from 'react'
import Paint from '../../../assets/webdesign.svg';
import GlowUp from '../../ui/GlowUp';

function WebDesignGlowUp() {

    const title = (
        <>
        <span>
              <span>L</span>
              <span>o</span>
              <span>o</span>
              <span>k</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </span>&nbsp;
            <span>
              <span>f</span>
              <span>o</span>
              <span>r</span>
            </span>&nbsp;
            <span>
              <span>a</span>
            </span>&nbsp;
            <span>
              <span>b</span>
              <span>r</span>
              <span>a</span>
              <span>n</span>
              <span>d</span>
            </span>&nbsp;
            <span>
              <span>g</span>
              <span>l</span>
              <span>o</span>
              <span>w</span>
            </span>&nbsp;
            <span>
              <span>u</span>
              <span>p</span>
              <span>?</span>
            </span>
        </>
    );

    const icon = Paint;

    const subTitle = "Let’s work together!";

    const btn = "send us a message"

  return (
    <div>
        <GlowUp
        title={title}
        icon={icon}
        subTitle={subTitle}
        btn={btn}
        />
    </div>
  )
}

export default WebDesignGlowUp