import React, { useState } from 'react';
import styles from './VRApp.module.scss';
import TaskScene from "../../assets/TaskScene.png";
import StressreductionScene from "../../assets/StressreductionScene.png";
import demo from "../../assets/demoVideo.mp4";

const VRApp: React.FC = () => {
  const media = [
    { src: TaskScene, type: 'image' },
    { src: StressreductionScene, type: 'image' },
    { src: demo, type: 'video' },
  ];
  const [lightbox, setLightbox] = useState<{ src: string; type: string } | null>(null);

  return (
    <>
      <section className={styles.VRAppOuter}>
        <div className={styles.VRAppInner}>
          <h3>Bachelor Thesis: The Impact of the Customizable VR Environments on Stress Reduction</h3>
          <p className={styles.description}>
            An interactive VR application that induces acute stress through timed arithmetic challenges and then guides users into a calming natural environment.
            Participants solve increasingly difficult math problems under a countdown with audio stressors, followed by free exploration of one of five stylized
            nature scenes for relaxation. Built in Unity for Oculus Quest 2, it supports optional scene personalization for experimental comparison.

            In my Bachelor thesis, I developed and evaluated a VR application designed to reduce acute emotional stress through immersive nature experiences.
            The key innovation of the project was the ability for users to personalize the virtual environment—selecting scenery, ambient sounds, and time of day—to match their individual preferences.
            Using a mixed-method approach, I combined physiological data (heart rate) with subjective responses (questionnaires) to assess stress levels before and after the VR experience.
            The results showed that participants who could customize their VR scene experienced greater relaxation, a stronger sense of control, and more positive emotional responses compared to those with a non-customized environment.
            This project highlights the potential of interactive, user-centered VR applications in mental health and stress management, particularly when personalization is integrated as a core design principle.
          </p>
          <div className={styles.screenshots}>
            {media.map((m, i) =>
              m.type === 'image' ? (
                <img
                  key={i}
                  src={m.src}
                  alt={`Screenshot ${i + 1}`}
                  className={styles.thumb}
                  onClick={() => setLightbox(m)}
                />
              ) : (
                <video
                  key={i}
                  src={m.src}
                  className={styles.thumb}
                  onClick={() => setLightbox(m)}
                  muted
                  loop
                  playsInline
                />
              )
            )}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          {lightbox.type === 'image' ? (
            <img src={lightbox.src} className={styles.enlarged} alt="Enlarged media" />
          ) : (
            <video
              src={lightbox.src}
              className={styles.enlarged}
              controls
              autoPlay
            />
          )}
        </div>
      )}
    </>
  );
};

export default VRApp;
