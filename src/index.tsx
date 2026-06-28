/**
 * @jeff-aporta/mimicus-react — API pública ESM (import from).
 */
import { AppLayout } from "./layout/app-layout/AppLayout.tsx";
import { AppLayoutProvider } from "./layout/app-layout/appLayoutContext.tsx";
import { AppLayoutSider } from "./layout/app-layout/AppLayoutSider.tsx";
import { BlockLayout } from "./layout/grid/BlockLayout.tsx";
import { FlexLayout } from "./layout/grid/FlexLayout.tsx";
import { GridLayout } from "./layout/grid/GridLayout.tsx";
import { Divider } from "./layout/dividers/Divider.tsx";
import { Splitter } from "./layout/panels/Splitter.tsx";
import { SidePanel } from "./layout/panels/SidePanel.tsx";
import { SidePanelSection } from "./layout/panels/SidePanelSection.tsx";
import { Space } from "./layout/containers/Space.tsx";
import { Stack } from "./layout/containers/Stack.tsx";
import { Box } from "./layout/containers/Box.tsx";
import { Container } from "./layout/containers/Container.tsx";
import { Masonry } from "./layout/grid/Masonry.tsx";
import { ImageList } from "./layout/grid/ImageList.tsx";
import { Separator } from "./layout/dividers/Separator.tsx";
import { GridResponsiveForm } from "./layout/grid/GridResponsiveForm.tsx";
import { useLayoutSlot, useLayoutSize } from "./layout/app-layout/layoutSlotContext.tsx";
import { Icon } from "./components/Icon.tsx";
import { Button } from "./components/Button.tsx";
import { FloatButton, Fab, IconButton } from "./components/FloatButton.tsx";
import { Card } from "./components/Card.tsx";
import { CodeBlock, CodeMirrorPanel } from "./components/CodeBlock.tsx";
import { Typography, Text, Headings } from "./components/typography/Typography.tsx";
import {
  Anchor, Breadcrumbs, Breadcrumb, Dropdown, Menu, Tabs, TabItem, Pagination, Steps, Step, Stepper,
  Drawer, BottomNavigation, BottomNavigationAction, NavLink, Link, SpeedDial, SpeedDialAction,
} from "./components/navigation/Navigation.tsx";
import { mountNavigation } from "./nav/index.ts";
import { mountForms } from "./forms/index.ts";
import { mountDisplay } from "./display/index.ts";
import {
  ensureCodeMirrorLoaded, ensureCodeMirrorCss, mountCodeMirror, destroyCodeMirror,
  resolveCodeMirrorTheme, copyEditorText,
} from "./codemirror/index.ts";
import {
  Badge, Tag, Chip, Avatar, AvatarGroup, Carousel, Collapse, CollapsePanel, Accordion,
  Descriptions, DescriptionsItem, Empty, QRCode, Segmented, Statistic, Table, Timeline, TimelineItem,
  Tooltip, Tour, Tree, Calendar, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar,
} from "./components/display/Display.tsx";
import {
  Form, FormItem, Input, TextField, TextArea, InputNumber, Checkbox, CheckboxIcon, CheckboxChip,
  Switch, LabeledSwitch, Radio, RadioGroup, Slider, Rate, Rating, Select, AutoComplete,
  ToggleButton, ToggleButtonGroup, Transfer, TransferList, TransferBoard, Upload, ColorPicker,
  DatePicker, TimePicker, Cascader, TreeSelect, Mentions,
} from "./components/forms/Forms.tsx";
import { DataGrid } from "./datagrid/react/DataGrid.tsx";
import { ThemeProvider } from "./theme/ThemeProvider.tsx";
import {
  bootTheme,
  applyTheme,
  setLuminance,
  setThemeColor,
  setDesignScheme,
  getThemeState,
  subscribeTheme,
} from "./theme/themeEngine.ts";
import {
  bootLooknfeel,
  applyLooknfeel,
  getLooknfeelState,
  subscribeLooknfeel,
} from "./theme/looknfeelEngine.ts";
import * as themeConstants from "./theme/constants.ts";
import {
  SpaRouter,
  SpaNavLink,
  MimicusSidebar,
  SpaOutlet,
  useSpa,
  useSpaRoute,
  getSpaRoute,
  setSpaRoute,
} from "./spa/SpaRouter.tsx";
import { urlState } from "./spa/urlState.ts";
import * as appLayoutVariants from "./layout/app-layout/appLayoutVariants.ts";
import { resolveColor, colorMix } from "./lib/resolveColor.ts";
import { mergeSurfaceStyle } from "./lib/surfaceColor.ts";
import * as colorTransform from "./lib/colorTransform.ts";
import * as snippets from "./snippets/index.ts";
import { fluidCss, js2css } from "./snippets/fluidCss.js";
import { BRAND_DISPLAY_NAME } from "./snippets/constants.js";
import * as cdn from "./cdn/index.ts";
import {
  LoginButton, LoginDialog, LoginFormFields, LoginFormActions, ContapymeIcon,
  createOrchestratorSession, createDemoSession,
  ContapymeSessionProvider, useContapymeSession, resolveContapymeSession, useResolvedContapymeSession,
  readLoginCredentials, saveLoginCredentials, clearLoginCredentials,
  normalizeContapymeLoginId, formatContapymeLoginInput, resolveSessionHeaderLabel, CONTAPYME_LOGIN_DOMAIN,
  loginWithInsoftAutoRetry, defaultIterceroFromTerceros, DEFAULT_APP_ITERCERO, wrapPassword,
  MAIN_ORCHESTRATOR_URL_PROD, MAIN_ORCHESTRATOR_URL_LOCAL, MAIN_ORCHESTRATOR_LS_KEY,
  AUTH_DEFAULTS, LOGIN_SUBTITLE_DEFAULT, CONTAPYME_LOGIN_ID_HELPER, LOGIN_REMEMBER_LABEL,
} from "./contapyme/index.ts";
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
} from "./shell/index.ts";

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
  useLayoutSize,
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
  DataGrid,
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

export * from "./datagrid/core/index.ts";
export { useGridModel, registerCellRenderer, getCellRenderer } from "./datagrid/react/index.ts";
export type { DataGridProps } from "./datagrid/react/DataGrid.tsx";
export type { CellRenderer, CellRendererParams } from "./datagrid/react/cellRenderers.tsx";
export { snippets, cdn, colorTransform };
export * from "./lib/colorTransform.ts";
export * from "./theme/constants.ts";
export * from "./layout/app-layout/appLayoutVariants.ts";
export * from "./devkit/index.ts";
