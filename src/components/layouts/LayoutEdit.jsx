import { useReducer } from "react";

import LayoutEditView from "@/components/layouts/LayoutEditView";

import { LAYOUT_EDIT_CONFIG } from "@/constants/constants";

function LayoutEdit(props) {
  const { layoutType } = props;

  const [localState, updateLocalState] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      selectedWidgetPosition: null,
    }
  );

  const handleToggleWidgetActive = widgetPosition => {
    if (widgetPosition === localState.selectedWidgetPosition) {
      updateLocalState({ selectedWidgetPosition: null });
    } else {
      updateLocalState({ selectedWidgetPosition: widgetPosition });
    }
  };

  const layoutConfig = LAYOUT_EDIT_CONFIG[layoutType];

  if (!layoutConfig) {
    return <div />;
  }

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
      {layoutConfig.map(item => {
        return (
          <div className={item.className} key={item.position}>
            <LayoutEditView
              position={item.position}
              selectedWidgetPosition={localState.selectedWidgetPosition}
              onSelectWidget={handleToggleWidgetActive}
            />
          </div>
        );
      })}
    </div>
  );
}

export default LayoutEdit;
