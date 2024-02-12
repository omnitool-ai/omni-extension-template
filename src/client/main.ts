//import './css/bootstrap-icons_font_bootstrap-icons.css'
import {OmniSDKClient} from 'omni-sdk';
const sdk = new OmniSDKClient("<replace with your extension id>").init();

sdk.sendChatMessage("Hello from Omni Extension!");