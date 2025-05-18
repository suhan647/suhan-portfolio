import Image from "next/image";
import MySkillsList from "../constants/skills";
import MotionWrapper from "./MotionWrapper";
import clsx from "clsx";

const MySkills = () => {
  return (
    <div className="container min-h-screen" id="skills">
      <div className="flex flex-col">
        <h2 className=" section-heading">
          I have experience working with these technologies
        </h2>

        <div>
          <table>
            <tbody>
              {MySkillsList.map(({ name, skillSet }) => {
                return (
                  <tr key={`skill-${name}`}>
                    <td className="hidden md:table-cell">
                      <h3 className="text-3xl font-semibold">{name}</h3>
                    </td>
                    <td className="flex gap-7 flex-wrap pl-0 md:pl-10 py-10 justify-center md:justify-normal">
                      <h3 className="text-3xl block md:hidden mb-5 min-w-full font-semibold">
                        {name}
                      </h3>
                      {skillSet.map(
                        ({
                          link,
                          name: skillName,
                          needWhiteBackground = false,
                        }) => {
                          return link ? (
                            <div key={skillName} className="text-center ">
                              <MotionWrapper>
                                <Image
                                  src={link}
                                  width={80}
                                  height={80}
                                  alt={skillName}
                                  className={clsx({
                                    "bg-white": needWhiteBackground,
                                  })}
                                />
                                {skillName}
                              </MotionWrapper>
                            </div>
                          ) : (
                            ""
                          );
                        }
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
