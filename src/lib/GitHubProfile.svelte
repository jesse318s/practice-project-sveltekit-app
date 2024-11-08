<script>
  import { onMount } from "svelte";
  import axios from "axios";

  let profile = undefined;
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
  <p class="loading">Loading</p>
{:else}
  <div>
    <img
      class="rounded-pill"
      src={profile.avatar_url}
      alt="Profile avatar"
      width="200px"
      height="200px"
      loading="lazy"
    />
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
  .loading::after {
    content: "";
    animation: ellipsis 1.5s infinite steps(4, end);
    position: absolute;
  }

  @keyframes ellipsis {
    0% {
      content: "";
    }
    25% {
      content: ".";
    }
    50% {
      content: "..";
    }
    75% {
      content: "...";
    }
    100% {
      content: "";
    }
  }
</style>
