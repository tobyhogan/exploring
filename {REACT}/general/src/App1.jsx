import { useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";

import ResizeHandle from "./ResizeHandle";
import styles from "./styles.module.css";

export default function App() {
  const [showFirstPanel, setShowFirstPanel] = useState(true);
  const [showLastPanel, setShowLastPanel] = useState(true);

  return (
    <div className={styles.Container}>
      <button>collapse</button>
      <div className={styles.BottomRow}>
        <PanelGroup autoSaveId="example" direction="horizontal">
          <>
            <Panel className={styles.Panel} defaultSize={20} order={1}>
              <PanelGroup autoSaveId="example" direction="vertical">
                <Panel className={styles.Panel} order={2}>
                  <div className={styles.PanelContent}>tb</div>
                </Panel>
              </PanelGroup>
            </Panel>
            <ResizeHandle />
          </>
          <Panel className={styles.Panel} collapsible={true} order={2}>
            <PanelGroup autoSaveId="example" direction="vertical">
              <Panel className={styles.Panel} order={2}>
                <div className={styles.PanelContent}>tb</div>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}
