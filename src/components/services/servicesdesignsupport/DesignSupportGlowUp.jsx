import React from 'react'
import Paint from '../../../assets/frontenddesign.svg';
import GlowUp from '../../ui/GlowUp';

function DesignSupportGlowUp() {
    const title = (
        <>
        <span>
              <span>N</span>
              <span>e</span>
              <span>e</span>
              <span>d</span>
            </span>&nbsp;
            <span>
              <span>s</span>
              <span>t</span>
              <span>u</span>
              <span>n</span>
              <span>n</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </span>&nbsp;
            <span>
              <span>w</span>
              <span>e</span>
              <span>b</span>
              <span>s</span>
              <span>i</span>
              <span>t</span>
              <span>e</span>
            </span>&nbsp;
            <span>
              <span>d</span>
              <span>e</span>
              <span>s</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
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

export default DesignSupportGlowUp