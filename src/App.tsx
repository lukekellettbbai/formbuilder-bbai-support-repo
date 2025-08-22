import {BuilderView, FormBuilder, type CustomizationMap} from '@react-form-builder/designer'
import { signatureComponent } from '@react-form-builder/components-signature';
import { rsErrorMessage, RsLocalizationWrapper, rSuiteComponents } from '@react-form-builder/components-rsuite';

const simpleCustomization: CustomizationMap = {
  ToggleModeButton: {
    style: `
        background: #0c5661 !important;
      `,
  },
  LocalizationSelect: {
    hidden: true,
  },
  ResolutionSelect: {
    hidden: true,
  },
  PropertyCodeButton: {
    hidden: true,
  },
  Forms_Tab: {
    hidden: true,
  },
  Forms_Tab_Content: {
    hidden: true,
  },
};

/**
 * @returns the App element.
 */
export const App = () => {
  const builderView = 
    new BuilderView([signatureComponent, ...rSuiteComponents].map((definer) => definer.build()))
      .withErrorMeta(rsErrorMessage.build())
      .withViewerWrapper(RsLocalizationWrapper);

  return (
    <div>
      <FormBuilder 
        view={builderView}
        customization={simpleCustomization}
      />
    </div>
  );

}

export default App