// @ts-nocheck — devkit interno (motor del playground); tipado estricto pendiente.
/**
 * componentRegistry — devkit
 * llm:  ./componentRegistry.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shared/driver/componentRegistry.tsx
 * Mapa de componentes implementados de la librería + stubs para los pendientes de port.
 */
import {
  AppLayout, AppLayoutProvider, Button, Card, CodeBlock, FloatButton, Fab, IconButton,
  Text, Headings, Typography, BlockLayout, FlexLayout, GridLayout,
  Divider, Splitter, Space, Stack, Box, Container, Masonry, ImageList, Separator, GridResponsiveForm,
  Anchor, Breadcrumbs, Dropdown, Menu, Tabs, TabItem, Pagination, Steps, Step, Drawer, BottomNavigation, BottomNavigationAction, NavLink, SpeedDial, SpeedDialAction,
  Form, FormItem, Input, TextField, TextArea, InputNumber, Checkbox, CheckboxIcon, CheckboxChip,
  Switch, LabeledSwitch, Radio, RadioGroup, Slider, Rate, Rating, Select, AutoComplete,
  ToggleButton, ToggleButtonGroup, Transfer, TransferList, TransferBoard, Upload, ColorPicker,
  DatePicker, TimePicker, Cascader, TreeSelect, Mentions,
  Badge, Tag, Chip, Avatar, AvatarGroup, Carousel, Collapse, CollapsePanel, Accordion,
  Descriptions, DescriptionsItem, Empty, QRCode, Segmented, Statistic, Table, Timeline, TimelineItem,
  Tooltip, Tour, Tree, Calendar, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar,
  Dialog, Modal, ActionDrawer, Loading, Toaster, toastSuccess, toastError, toastLoading, toastRemove, Alert, TipInfo, InvokedFloater, FloatingComponent,
  LoginButton, ContapymeSessionProvider, createOrchestratorSession, createDemoSession,
  SidePanel, SidePanelSection, DataGrid,
} from "../../_ui.ts";
import { Icon } from "../../../components/Icon.tsx";

const IMPLEMENTED = {
  Button, Card, CodeBlock, FloatButton, Fab, IconButton, Text, Headings, Typography,
  AppLayout, AppLayoutProvider, BlockLayout, FlexLayout, GridLayout,
  SidePanel, SidePanelSection,
  Divider, Splitter, Space, Stack, Box, Container, Masonry, ImageList, Separator, GridResponsiveForm,
  Anchor, Breadcrumbs, Dropdown, Menu, Tabs, TabItem, Pagination, Steps, Step, Drawer, BottomNavigation, BottomNavigationAction, NavLink, SpeedDial, SpeedDialAction,
  Breadcrumb: Breadcrumbs, Stepper: Steps, Link: NavLink,
  Form, FormItem, Input, TextField, TextArea, InputNumber, Checkbox, CheckboxIcon, CheckboxChip,
  Switch, LabeledSwitch, Radio, RadioGroup, Slider, Rate, Rating, Select, AutoComplete,
  ToggleButton, ToggleButtonGroup, Transfer, TransferList, TransferBoard, Upload, ColorPicker,
  DatePicker, TimePicker, Cascader, TreeSelect, Mentions,
  Badge, Tag, Chip, Avatar, AvatarGroup, Carousel, Collapse, CollapsePanel, Accordion,
  Descriptions, DescriptionsItem, Empty, QRCode, Segmented, Statistic, Table, Timeline, TimelineItem,
  Tooltip, Tour, Tree, Calendar, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar,
  Dialog, Modal, ActionDrawer, Loading, Toaster, toastSuccess, toastError, toastLoading, toastRemove, Alert, TipInfo, InvokedFloater, FloatingComponent,
  LoginButton, ContapymeSessionProvider, createOrchestratorSession, createDemoSession,
  DataGrid,
};

const stubCache = new Map();

function makeStub(name) {
  if (stubCache.has(name)) return stubCache.get(name);
  function StubComponent({ className, style, children, ...rest }) {
    const label = rest["data-label"] ?? name;
    return (
      <div className={["mimicus-preview-stub", className].filter(Boolean).join(" ")} style={style} data-component={name}>
        <div className="mimicus-preview-stub__badge"><Icon icon="mdi:package-variant" /> {label}</div>
        {children && <div className="mimicus-preview-stub__body">{children}</div>}
        <p className="mimicus-preview-stub__hint">Componente pendiente de port a React</p>
      </div>
    );
  }
  StubComponent.__mimicusStub = true;
  StubComponent.displayName = `Stub(${name})`;
  stubCache.set(name, StubComponent);
  return StubComponent;
}

export function resolveComponent(name) {
  return IMPLEMENTED[name] ?? makeStub(name);
}

export function isStubComponent(name) {
  const C = resolveComponent(name);
  return C.__mimicusStub === true;
}
