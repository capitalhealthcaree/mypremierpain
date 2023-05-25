import React from "react";
import Link from "next/link";

export const TreatmentsSidebarMenu = () => {
  return (
    <>
      <aside
        className="side-nav v1 light-bg border-radius-item box-shadow el-tab-box"
        id="SideNavV1"
        data-onvisible="show"
        data-slider="true"
        data-closing="false"
      >
        <nav>
          <header className="text-left">
              <h5>Treatments</h5>
          </header>
          <ul className="" data-role="panel">
            <li className="level-1 selected ">
              <Link
                className="auto"
                href="/treatments/mild-procedure"
                target=""
              >
                Mild Procedure
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/treatments/percutaneous-discectomy"
                target=""
              >
                Percutaneous Discectomy
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/treatments/trigger-point-injections"
                target=""
              >
                Trigger Point Injections
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/treatments/epidural-nerve-block"
                target=""
              >
                Epidural Nerve Block
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/treatments/joint-injections"
                target=""
              >
                Joint Injections
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/treatments/regenerating-spinal-discs"
                target=""
              >
                Regenerating Spinal Discs
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/treatments/si-joint-injection"
                target=""
              >
                SI Joint Injection
              </Link>
            </li>
            <li className="level-1  ">
              <Link className="auto" href="/treatments/pronox" target="">
                Pronox
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/treatments/occipital-nerve-block"
                target=""
              >
                Occipital Nerve Block
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/treatments/genicular-nerve-block"
                target=""
              >
                Genicular Nerve Block
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/treatments/intrathecal-pump"
                target=""
              >
                Intrathecal Pump
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default TreatmentsSidebarMenu;
