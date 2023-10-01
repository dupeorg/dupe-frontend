import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, TextInput, Title } from 'react-native-paper';

const exampleUserProfile = {
  name: 'Dupey Dupe',
  username: 'dupe',
  trades: 1000,
  requests: 200,
  image: 'https://source.unsplash.com/user/c_v_r/100x100',
};

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState(exampleUserProfile);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    // TODO: integrate with backend to save the edited profile
    setEditing(false);
  };

  const handleCancel = () => {
    // Reset the form fields to their original values and exit edit mode
    setProfile(exampleUserProfile);
    setEditing(false);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Avatar.Image size={100} source={{ uri: profile.image }} />
          <Title>{profile.name}</Title>
          <Text>@{profile.username}</Text>
          <View style={styles.followers}>
            <Text>{profile.trades} Trades</Text>
            <Text>{profile.requests} Requests</Text>
          </View>

          {editing ? (
            <View style={styles.editForm}>
              <TextInput
                label="Name"
                value={profile.name}
                onChangeText={(text) => setProfile({ ...profile, name: text })}
                style={styles.input}
              />
              <TextInput
                label="Username"
                value={profile.username}
                onChangeText={(text) => setProfile({ ...profile, username: text })}
                style={styles.input}
              />
              <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={handleCancel} style={styles.cancelButton}>
                  Cancel
                </Button>
                <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
                  Save
                </Button>
              </View>
            </View>
          ) : null}

          {!editing ? (
            <Button mode="contained" onPress={handleEditToggle} style={styles.editButton}>
              Edit Profile
            </Button>
          ) : null}
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: '90%',
    padding: 10,
  },
  editForm: {
    marginTop: 10,
  },
  followers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  input: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#e91e63',
  },
  saveButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#e91e63',
  },
  cancelButton: {
    flex: 1,
    marginRight: 5,
  },
});
