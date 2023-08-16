import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';
import PitcherRegister from './src/screens/PitcherRegister';
import EmailVerifcation from './src/screens/EmailVerifcation';
import ImageUploading from './src/screens/ImageUploading';
import CnicImage from './src/screens/CnicImage';
import PitcherHome from './src/screens/PitcherHome';
import InvestorRegister from './src/screens/InvestorRegister';
import InvestorHome from './src/screens/InvestorHome';
import ForgetNow from './src/screens/ForgetNow';
import EmailVerification2 from './src/screens/EmailVerification2';
import NewPassword from './src/screens/NewPassword';
import ProfileRequest from './src/screens/ProfileRequest';
import CnicImage2 from './src/screens/CnicImage2';
import AddIdea from './src/screens/AddIdea';
import MyIdeas from './src/screens/MyIdeas';
import DeleteIdea from './src/screens/DeleteIdea';
import IdeaMilestone from './src/screens/IdeaMilestone';
import SearchIdea from './src/screens/SearchIdea';
import IdeaDetail from './src/screens/IdeaDetail';
import InvestorDashboard from './src/screens/InvestorDashboard';
import UpdateProfileRequest from './src/screens/UpdateProfileRequest';
import InvestorMainScreen from './src/screens/InvestorMainScreen';
import InvestNow from './src/screens/InvestNow';
import PayNow from './src/screens/PayNow';
import Logout from './src/screens/Logout';
import GenerateLink from './src/screens/GenerateLink';
import MeetingLink from './src/screens/MeetingLink';
import PitcherProjectManagement from './src/screens/PitcherProjectManagement';
import ViewMilestone from './src/screens/ViewMilestone';
import AddMilestoneWork from './src/screens/AddMilestoneWork';
import MyInvestmentProject from './src/screens/MyInvestmentProject';
import ViewProjectMilestone from './src/screens/ViewProjectMilestone';
import ApprovedMilestoneWork from './src/screens/ApprovedMilestoneWork';
import ChatMessenger from './src/screens/ChatMessenger';
import MyChat from './src/screens/MyChat';
import MyChats from './src/screens/MyChats';
import ChatMessengers from './src/screens/ChatMessengers';
import MyPayment from './src/screens/MyPayment';

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">

         <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
         <Stack.Screen name="PitcherRegister" component={PitcherRegister} options={{headerShown: false}} />
         <Stack.Screen name="EmailVerifcation" component={EmailVerifcation}  />
         <Stack.Screen name="ImageUploading" component={ImageUploading} />
         <Stack.Screen name="CnicImage" component={CnicImage} />
         <Stack.Screen name="CnicImage2" component={CnicImage2} />
         <Stack.Screen name="PitcherHome" component={PitcherHome} options={{headerShown: false}}/>
         <Stack.Screen name="InvestorRegister" component={InvestorRegister} options={{headerShown: false}} />
         <Stack.Screen name="InvestorHome" component={InvestorHome} options={{headerShown: false}} />
         <Stack.Screen name="ForgetNow" component={ForgetNow} />
         <Stack.Screen name="EmailVerification2" component={EmailVerification2} options={{headerShown: false}} />
         <Stack.Screen name="NewPassword" component={NewPassword} />
         <Stack.Screen name="ProfileRequest" component={ProfileRequest} />
         <Stack.Screen name="AddIdea" component={AddIdea} />
         <Stack.Screen name="MyIdeas" component={MyIdeas} />
         <Stack.Screen name="DeleteIdea" component={DeleteIdea} />
         <Stack.Screen name="IdeaMilestone" component={IdeaMilestone} />
         <Stack.Screen name="SearchIdea" component={SearchIdea}  />
         <Stack.Screen name="IdeaDetail" component={IdeaDetail} />
         <Stack.Screen name="UpdateProfileRequest" component={UpdateProfileRequest} />
         <Stack.Screen name="InvestorMainScreen" component={InvestorMainScreen} options={{headerShown: false}}
         />
         <Stack.Screen name="InvestorDashboard" component={InvestorDashboard} options={{headerShown: false}}/>
         <Stack.Screen name="InvestNow" component={InvestNow} />
         <Stack.Screen name="PayNow" component={PayNow} />
         <Stack.Screen name="Logout" component={Logout} />
         <Stack.Screen name="GenerateLink" component={GenerateLink} />
         <Stack.Screen name="MeetingLink" component={MeetingLink} />
         <Stack.Screen name="PitcherProjectManagement" component={PitcherProjectManagement} />
         <Stack.Screen name="ViewMilestone" component={ViewMilestone} />
         <Stack.Screen name="AddMilestoneWork" component={AddMilestoneWork} />
         <Stack.Screen name="MyInvestmentProject" component={MyInvestmentProject} />
         <Stack.Screen name="ViewProjectMilestone" component={ViewProjectMilestone} />
         <Stack.Screen name="ApprovedMilestoneWork" component={ApprovedMilestoneWork} />
         <Stack.Screen name="ChatMessenger" component={ChatMessenger} />
         <Stack.Screen name="MyChat" component={MyChat} />
         <Stack.Screen name="MyChats" component={MyChats} />
         <Stack.Screen name="ChatMessengers" component={ChatMessengers} />
         <Stack.Screen name="MyPayment" component={MyPayment} />
       </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

