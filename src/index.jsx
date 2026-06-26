/**
 * @jeff-aporta/mimicus-react — API pública ESM (import from).
 */
import { AppLayout } from "./layout/AppLayout.jsx";
import { AppLayoutProvider } from "./layout/appLayoutContext.jsx";
import { AppLayoutSider } from "./layout/AppLayoutSider.jsx";
import { BlockLayout } from "./layout/BlockLayout.jsx";
import { FlexLayout } from "./layout/FlexLayout.jsx";
import { GridLayout } from "./layout/GridLayout.jsx";
import { Divider } from "./layout/Divider.jsx";
import { Splitter } from "./layout/Splitter.jsx";
import { SidePanel } from "./layout/SidePanel.jsx";
import { SidePanelSection } from "./layout/SidePanelSection.jsx";
import { Space } from "./layout/Space.jsx";
import { Stack } from "./layout/Stack.jsx";
import { Box } from "./layout/Box.jsx";
import { Container } from "./layout/Container.jsx";
import { Masonry } from "./layout/Masonry.jsx";
import { ImageList } from "./layout/ImageList.jsx";
import { Separator } from "./layout/Separator.jsx";
import { GridResponsiveForm } from "./layout/GridResponsiveForm.jsx";
import { useLayoutSlot } from "./layout/layoutSlotContext.jsx";
import { Icon } from "./components/Icon.jsx";
import { Button } from "./components/Button.jsx";
import { FloatButton, Fab, IconButton } from "./components/FloatButton.jsx";
import { Card } from "./components/Card.jsx";
import { CodeBlock, CodeMirrorPanel } from "./components/CodeBlock.jsx";
import { Typography, Text, Headings } from "./components/typography/Typography.jsx";
import {
  Anchor, Breadcrumbs, Breadcrumb, Dropdown, Menu, Tabs, TabItem, Pagination, Steps, Step, Stepper,
  Drawer, BottomNavigation, BottomNavigationAction, NavLink, Link, SpeedDial, SpeedDialAction,
} from "./components/navigation/Navigation.jsx";
import { mountNavigation } from "./nav/index.js";
import { mountForms } from "./forms/index.js";
import { mountDisplay } from "./display/index.js";
import {
  ensureCodeMirrorLoaded, ensureCodeMirrorCss, mountCodeMirror, destroyCodeMirror,
  resolveCodeMirrorTheme, copyEditorText,
} from "./codemirror/index.js";
import {
  Badge, Tag, Chip, Avatar, AvatarGroup, Carousel, Collapse, CollapsePanel, Accordion,
  Descriptions, DescriptionsItem, Empty, QRCode, Segmented, Statistic, Table, Timeline, TimelineItem,
  Tooltip, Tour, Tree, Calendar, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar,
} from "./components/display/Display.jsx";
import {
  Form, FormItem, Input, TextField, TextArea, InputNumber, Checkbox, CheckboxIcon, CheckboxChip,
  Switch, LabeledSwitch, Radio, RadioGroup, Slider, Rate, Rating, Select, AutoComplete,
  ToggleButton, ToggleButtonGroup, Transfer, TransferList, TransferBoard, Upload, ColorPicker,
  DatePicker, TimePicker, Cascader, TreeSelect, Mentions,
} from "./components/forms/Forms.jsx";
import { ThemeProvider } from "./theme/ThemeProvider.jsx";
import {
  bootTheme,
  applyTheme,
  setLuminance,
  setThemeColor,
  setDesignScheme,
  getThemeState,
  subscribeTheme,
} from "./theme/themeEngine.js";
import {
  bootLooknfeel,
  applyLooknfeel,
  getLooknfeelState,
  subscribeLooknfeel,
} from "./theme/looknfeelEngine.js";
import * as themeConstants from "./theme/constants.js";
import {
  SpaRouter,
  SpaNavLink,
  MimicusSidebar,
  SpaOutlet,
  useSpa,
  useSpaRoute,
  getSpaRoute,
  setSpaRoute,
} from "./spa/SpaRouter.jsx";
import { urlState } from "./spa/urlState.js";
import * as appLayoutVariants from "./layout/appLayoutVariants.js";
import { resolveColor, colorMix } from "./lib/resolveColor.js";
import { mergeSurfaceStyle } from "./lib/surfaceColor.js";
import * as colorTransform from "./lib/colorTransform.js";
import * as snippets from "./snippets/index.js";
import { fluidCss, js2css } from "./snippets/fluidCss.js";
import { BRAND_DISPLAY_NAME } from "./snippets/constants.js";
import * as cdn from "./cdn/index.js";
import {
  LoginButton, LoginDialog, LoginFormFields, LoginFormActions, ContapymeIcon,
  createOrchestratorSession, createDemoSession,
  ContapymeSessionProvider, useContapymeSession, resolveContapymeSession, useResolvedContapymeSession,
  readLoginCredentials, saveLoginCredentials, clearLoginCredentials,
  normalizeContapymeLoginId, formatContapymeLoginInput, resolveSessionHeaderLabel, CONTAPYME_LOGIN_DOMAIN,
  loginWithInsoftAutoRetry, defaultIterceroFromTerceros, DEFAULT_APP_ITERCERO, wrapPassword,
  MAIN_ORCHESTRATOR_URL_PROD, MAIN_ORCHESTRATOR_URL_LOCAL, MAIN_ORCHESTRATOR_LS_KEY,
  AUTH_DEFAULTS, LOGIN_SUBTITLE_DEFAULT, CONTAPYME_LOGIN_ID_HELPER, LOGIN_REMEMBER_LABEL,
} from "./contapyme/index.js";
import {
  NavTabRow,
  ShellHeaderNav,
  sortedCategories,
  sectionMeta,
  sectionColorFor,
  resolveCategoryTabDescriptors,
  resolveCatalogDemoTabDescriptors,
  normalizeShellNavRows,
  evaluateNavWhen,
  resolveNavRowTabs,
  resolveNavRowValue,
  resolveShellNavigation,
  dispatchShellNav,
} from "./shell/index.js";

export function bootMimicusUI() {
  bootTheme();
  bootLooknfeel();
}

export {
  bootTheme,
  applyTheme,
  setLuminance,
  setThemeColor,
  setDesignScheme,
  getThemeState,
  subscribeTheme,
  bootLooknfeel,
  applyLooknfeel,
  getLooknfeelState,
  subscribeLooknfeel,
  AppLayout,
  AppLayoutProvider,
  AppLayoutSider,
  BlockLayout,
  FlexLayout,
  GridLayout,
  Divider,
  Splitter,
  SidePanel,
  SidePanelSection,
  Space,
  Stack,
  Box,
  Container,
  Masonry,
  ImageList,
  Separator,
  GridResponsiveForm,
  useLayoutSlot,
  Icon,
  Button,
  FloatButton,
  Fab,
  IconButton,
  Card,
  CodeBlock,
  CodeMirrorPanel,
  Typography,
  Text,
  Headings,
  Anchor,
  Breadcrumbs,
  Breadcrumb,
  Dropdown,
  Menu,
  Tabs,
  TabItem,
  Pagination,
  Steps,
  Step,
  Stepper,
  Drawer,
  BottomNavigation,
  BottomNavigationAction,
  NavLink,
  Link,
  SpeedDial,
  SpeedDialAction,
  mountNavigation,
  mountForms,
  mountDisplay,
  ensureCodeMirrorLoaded,
  ensureCodeMirrorCss,
  mountCodeMirror,
  destroyCodeMirror,
  resolveCodeMirrorTheme,
  copyEditorText,
  Badge,
  Tag,
  Chip,
  Avatar,
  AvatarGroup,
  Carousel,
  Collapse,
  CollapsePanel,
  Accordion,
  Descriptions,
  DescriptionsItem,
  Empty,
  QRCode,
  Segmented,
  Statistic,
  Table,
  Timeline,
  TimelineItem,
  Tooltip,
  Tour,
  Tree,
  Calendar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Form,
  FormItem,
  Input,
  TextField,
  TextArea,
  InputNumber,
  Checkbox,
  CheckboxIcon,
  CheckboxChip,
  Switch,
  LabeledSwitch,
  Radio,
  RadioGroup,
  Slider,
  Rate,
  Rating,
  Select,
  AutoComplete,
  ToggleButton,
  ToggleButtonGroup,
  Transfer,
  TransferList,
  TransferBoard,
  Upload,
  ColorPicker,
  DatePicker,
  TimePicker,
  Cascader,
  TreeSelect,
  Mentions,
  ThemeProvider,
  SpaRouter,
  SpaNavLink,
  MimicusSidebar,
  SpaOutlet,
  useSpa,
  useSpaRoute,
  getSpaRoute,
  setSpaRoute,
  urlState,
  resolveColor,
  colorMix,
  mergeSurfaceStyle,
  fluidCss,
  js2css,
  BRAND_DISPLAY_NAME,
  LoginButton,
  LoginDialog,
  LoginFormFields,
  LoginFormActions,
  ContapymeIcon,
  createOrchestratorSession,
  createDemoSession,
  ContapymeSessionProvider,
  useContapymeSession,
  resolveContapymeSession,
  useResolvedContapymeSession,
  readLoginCredentials,
  saveLoginCredentials,
  clearLoginCredentials,
  normalizeContapymeLoginId,
  formatContapymeLoginInput,
  resolveSessionHeaderLabel,
  CONTAPYME_LOGIN_DOMAIN,
  loginWithInsoftAutoRetry,
  defaultIterceroFromTerceros,
  DEFAULT_APP_ITERCERO,
  wrapPassword,
  MAIN_ORCHESTRATOR_URL_PROD,
  MAIN_ORCHESTRATOR_URL_LOCAL,
  MAIN_ORCHESTRATOR_LS_KEY,
  AUTH_DEFAULTS,
  LOGIN_SUBTITLE_DEFAULT,
  CONTAPYME_LOGIN_ID_HELPER,
  LOGIN_REMEMBER_LABEL,
  NavTabRow,
  ShellHeaderNav,
  sortedCategories,
  sectionMeta,
  sectionColorFor,
  resolveCategoryTabDescriptors,
  resolveCatalogDemoTabDescriptors,
  normalizeShellNavRows,
  evaluateNavWhen,
  resolveNavRowTabs,
  resolveNavRowValue,
  resolveShellNavigation,
  dispatchShellNav,
};

export { snippets, cdn, colorTransform };
export * from "./lib/colorTransform.js";
export * from "./theme/constants.js";
export * from "./layout/appLayoutVariants.js";
export * from "./devkit/index.js";
