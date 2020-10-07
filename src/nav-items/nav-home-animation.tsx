import React, { useEffect, useState } from "react";
import "./nav-home-animation.css";

const NavHomeAnimation: React.FC = () => {
  // let experience = "Open Source Contributor: Mozilla"
  // experience = "Four Years Engineering Experience\nat AG Laser Technology"
  // experience = "Past: Bachelor of Mechanical Engineering\nat SUNY Stony Brook University"
  const [stringDisplay, setStringDisplay] = useState<string>("");

  useEffect(() => {
    const insertString = (str: string) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          setStringDisplay(str);
          res();
        }, 45);
      });
    };

    const removeString = (str: string) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          setStringDisplay(str);
          res();
        }, 20);
      });
    };

    const pauseAnimation = (msWait: number) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, msWait);
      });
    };

    const runAnimation = async () => {
      await pauseAnimation(500);
      while (true) {
        const experienceCycle = [
          "Open Source Contributor for Mozilla",
          "Past: Bachelor of Mechanical Engineering\nat SUNY Stony Brook University",
          "Four Years Engineering Experience\nat AG Laser Technology",
        ];

        for (let j = 0; j < experienceCycle.length; j++) {
          const experience = experienceCycle[j];

          for (let i = 0; i <= experience.length; i++) {
            await insertString(experience.slice(0, i));
          }

          await pauseAnimation(2000);

          for (let i = experience.length; i >= 0; i--) {
            await removeString(experience.slice(0, i));
          }
        }
      }
    };
    runAnimation();
  }, []);

  const subText = stringDisplay.split("\n").map((str, idx) => {
    return (
      <span key={idx}>
        <p className="my-status">{str}</p>
      </span>
    );
  });

  return (
    <div className="nav-home-animation">
      <br />
      <div className="animation">{subText}</div>
    </div>
  );
};

export default NavHomeAnimation;
