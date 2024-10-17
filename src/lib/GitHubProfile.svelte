<script>
  import { onMount } from "svelte";
  import axios from "axios";

  let profile = {};
  let error = null;

  onMount(async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/jesse318s"
      );
      const data = response.data;

      profile = {
        name: data.name,
        login: data.login,
        avatar_url: data.avatar_url,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        created_at: data.created_at,
        html_url: data.html_url,
      };
    } catch (err) {
      error = err.message;
    }
  });
</script>

{#if error}
  <p>Error: {error}</p>
{:else if !profile}
  <p>Loading...</p>
{:else}
  <div class="github-profile">
    <img src={profile.avatar_url} alt="Profile Avatar" />
    <h2>{profile.name}</h2>
    <p>@{profile.login}</p>
    <p>Public Repositories: {profile.public_repos}</p>
    <p>Followers: {profile.followers}</p>
    <p>Following: {profile.following}</p>
    <p>Joined: {new Date(profile.created_at).toLocaleDateString()}</p>
    <a class="btn btn-primary mb-3" href={profile.html_url}>
      <div class="font-weight-bold">View GitHub Profile</div>
    </a>
  </div>
{/if}

<style>
  .github-profile {
    text-align: center;
  }

  .github-profile img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
</style>
