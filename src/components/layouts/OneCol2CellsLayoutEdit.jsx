import { useReducer } from 'react';

import LayoutEditView from '@/components/layouts/LayoutEditView';

import { LAYOUT_EDIT_CONFIG, LAYOUT_TYPES } from "@/constants/constants";

function OneCol2CellsLayoutEdit() {
  const [localState, updateLocalState] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      selectedWidgetPosition: null,
    }
  );

  const handleToggleWidgetActive = (widgetPosition) => {
    if (widgetPosition === localState.selectedWidgetPosition) {
      updateLocalState({ selectedWidgetPosition: null });
    } else {
      updateLocalState({ selectedWidgetPosition: widgetPosition });
    }
  }

  const layoutType = LAYOUT_TYPES.ONE_COL_TWO_CELLS;

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
      {LAYOUT_EDIT_CONFIG[layoutType].map(item => {
        return (
          <div className={item.className} key={item.key}>
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

export default OneCol2CellsLayoutEdit;
