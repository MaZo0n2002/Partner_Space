import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  standalone:false,
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  // Settings Variables
  notificationsEnabled: boolean = true;
  notificationSound: string = 'default';
  darkModeEnabled: boolean = false;
  privateAccount: boolean = false;

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  // Edit Profile
  editProfile() {
    console.log('Edit Profile clicked');
    // Add navigation or modal to edit profile
  }

  // Toggle Notifications
  toggleNotifications() {
    console.log('Notifications Enabled:', this.notificationsEnabled);
    // Add logic to enable/disable notifications
  }

  // Change Notification Sound
  changeNotificationSound() {
    console.log('Notification Sound:', this.notificationSound);
    // Add logic to change notification sound
  }

  // Toggle Dark Mode
  toggleDarkMode() {
    console.log('Dark Mode Enabled:', this.darkModeEnabled);
    // Add logic to toggle dark mode
    document.body.classList.toggle('dark', this.darkModeEnabled);
  }

  // Toggle Private Account
  togglePrivateAccount() {
    console.log('Private Account:', this.privateAccount);
    // Add logic to toggle private account
  }

  // Change Password
  async changePassword() {
    const alert = await this.alertController.create({
      header: 'Change Password',
      inputs: [
        {
          name: 'currentPassword',
          type: 'password',
          placeholder: 'Current Password',
        },
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'New Password',
        },
        {
          name: 'confirmPassword',
          type: 'password',
          placeholder: 'Confirm New Password',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Password Change Data:', data);
            // Add logic to change password
          },
        },
      ],
    });

    await alert.present();
  }

  // Logout
  logout() {
    console.log('Logout clicked');
    // Add logic to logout user
  }
}